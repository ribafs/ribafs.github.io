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


### Instalar o faker
```php
composer require fakerphp/faker
```
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

## Mudar

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

### Referências

https://www.nicesnippets.com/blog/how-to-create-a-one-to-many-relationship-in-laravel-9
