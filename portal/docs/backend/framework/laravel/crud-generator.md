## Criando dois CRUDs com o gerador e laravel 9

Usando o ribafs/crud-generator-appzcoder

[https://github.com/ribafs/crud-generator-appzcoder](https://github.com/ribafs/crud-generator-appzcoder)

### Instalando o laravel 9
```bash
composer create-project laravel/laravel blog
```
cd blog

Criarei dois CRUDs, usando as tabelas posts e coments relacionadas em comments pelo post_id.

posts tem o campo name

comments tem post_id e body

### Instalar o gerador

composer require ribafs/crud-generator-appzcoder

### Publicar
```php
php artisan vendor:publish --provider="Appzcoder\CrudGenerator\CrudGeneratorServiceProvider"
```
### Criar o CRUD posts
```php
php artisan crud:generate Posts --fields='name#string;' --view-path= --controller-namespace=App\\Http\\Controllers --route-group= --form-helper=html
```
### Criar o CRUD comments
```php
php artisan crud:generate Comments --fields='body#text; post_id#integer;' --view-path= --controller-namespace=App\\Http\\Controllers --route-group= --form-helper=html 
```

### Edite a migration gerada para posts e deixe assim:

```php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('name')->notNullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    public function down()
    {
        Schema::drop('posts');
    }
}
```

### Edite a migration comments gerada e deixe assim:

```php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->text("body");
            $table->foreignId('post_id')->constrained('posts');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    public function down()
    {
        Schema::drop('comments');
    }
}
```

### Edite o app/Models/Post.php e deixe assim:

```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

### Edite o model Comment e deixe assim:

```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['body', 'post_id'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

### Adicione ao início do CommentController

Logo acima de: use App\Models\Comment;

use App\Models\Post;


### Criar a classe factory PostFactory
```php
php artisan make:factory PostFactory --model=Post
```
Edite database/factories/PostFactory.php e deixar assim:

```php
<?php
namespace Database\Factories;
 
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
 
class PostFactory extends Factory
{
    protected $model = Post::class;
 
    public function definition()
    {
        return [
            'name' => fake()->name(),
        ];
    }
}
```

### Criar a classe factory CommentFactory

php artisan make:factory CommentFactory --model=Comment

Edite database/factories/CommentFactory.php e deixar assim:

```php
<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Comment;

class CommentFactory extends Factory
{
    public function definition()
    {
        return [            
            'body' => fake()->text(),
            'post_id' => fake()->numberBetween($min = 1, $max = 100)
        ];
    }
}
```

### Criar banco e configurar no .env

### Executar todas as migrations e os seeders
```php
php artisan migrate:fresh --seed
```
## Usando o tinker

Podemos criar os registros, ao invés de usar um seeder usando o tinker, assim:
```php
php artisan tinker

App\Models\Post::factory()->count(100)->create();

App\Models\Comment::factory()->count(100)->create()
```
Ctrl+C

### Testando
```php
php artisan serve
```
http://127.0.0.1:8000/posts

Acesse

http://127.0.0.1:8000/comments

E adicione um comentário com user_id que não existe, exemplo 150.

Verá o erro

```php
Illuminate \ Database \ QueryException
PHP 8.1.2
9.35.1
SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row: a foreign key constraint fails (`laravel`.`comments`, CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`))

insert into `comments` (`body`, `post_id`, `updated_at`, `created_at`) values (teste, 150, 2022-10-13 21:31:40, 2022-10-13 21:31:40)
```

Não é boa ideia mandar uma mensagem destas para um usuário usando o sistema em produção.

Para melhorar precisamos tomar duas pvovidências: capturar e tratar o erro no controller CommentController e adicionar uma mensagem na view comments/index

### No controller

Adicionamos ao início

use Exception;

Mudamos o método store() para:

```php
    public function store(Request $request)
    {       
          $requestData = $request->all();

          try {
               Comment::create($requestData);
               return redirect('comments')->with('flash_message', 'Comments created!');
          } catch (Exception $e) {
              if($e->getCode() == 23000){
                  return redirect('comments')->with('danger_message', 'Este post_id não existe!');
              }
         }
    }
```

Adicionamos para a view comments/index.blade.php, logo abaixo do Add New
```php
@if ($message = Session::get('danger_message'))
    <div class="alert alert-danger">
        <p>{{ $message }}</p>
    </div>
@endif
@if ($message = Session::get('flash_message'))
    <div class="alert alert-success">
        <p>{{ $message }}</p>
    </div>
@endif
```

Assim, quando o usuário cadastrar um comentário corretamente receberá uma mensagem com fundo verde. E quando tentar cadastrar um comentário com um post_id que não existe ele será avisado com uma mensagem em fundo vermelho.

### Mudar

resources/views/admin/sidebar.blade.php
```html
<div class="col-md-3">
    <div class="card">
        <div class="card-header">
            Sidebar
        </div>

        <div class="card-body">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="{{ url('/posts') }}">
                        Posts
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/comments') }}">
                        Comments
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div> 
```

### Pacotes úteis

- [https://github.com/ribafs/laravel-migrations-generator](https://github.com/ribafs/laravel-migrations-generator)
- [https://github.com/ribafs/laravel-migration-generator](https://github.com/ribafs/laravel-migration-generator)
- [https://github.com/ribafs/migrations-generator](https://github.com/ribafs/migrations-generator)

- [https://github.com/ribafs/Replibyte-seed](https://github.com/ribafs/Replibyte-seed)
- [https://github.com/ribafs/iseed](https://github.com/ribafs/iseed)
- [https://github.com/ribafs/DbExporter](https://github.com/ribafs/DbExporter)


### Referências

https://www.nicesnippets.com/blog/how-to-create-a-one-to-many-relationship-in-laravel-9
https://www.itsolutionstuff.com/post/laravel-9-exception-handling-example-tutorialexample.html

