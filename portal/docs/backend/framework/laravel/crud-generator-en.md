## Creating two CRUDs with the generator and laravel 9

Using the package ribafs/crud-generator-appzcoder

[https://github.com/ribafs/crud-generator-appzcoder](https://github.com/ribafs/crud-generator-appzcoder)

### Installing the laravel 9
```bash
composer create-project laravel/laravel blog
```
cd blog

Create two CRUDs, using the posts and comments tables related in comments by post_id.

posts have field name

comments have post_id and body

### Installation of the gerador

composer require ribafs/crud-generator-appzcoder

### Publish
```php
php artisan vendor:publish --provider="Appzcoder\CrudGenerator\CrudGeneratorServiceProvider"
```
### Create CRUD posts
```php
php artisan crud:generate Posts --fields='name#string;' --view-path= --controller-namespace=App\\Http\\Controllers --route-group= --form-helper=html
```
### Create CRUD comments
```php
php artisan crud:generate Comments --fields='body#text; post_id#integer;' --view-path= --controller-namespace=App\\Http\\Controllers --route-group= --form-helper=html 
```

### Edit the generated migration for posts and leave it like this:

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

### Edit the generated migration comments and leave it like this:

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

### Edit the app/Models/Post.php:

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

### Edit the model Comment:

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

### Add to the beginning of CommentController

Just above: use App\Models\Comment;

use App\Models\Post;


### Create the classe factory PostFactory
```php
php artisan make:factory PostFactory --model=Post
```
Edit database/factories/PostFactory.php:

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

### Create the classe factory CommentFactory

php artisan make:factory CommentFactory --model=Comment

Edit database/factories/CommentFactory.php:

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

### Create database and configure on .env

### Execute all migrations and seeders
```php
php artisan migrate:fresh --seed
```
## Using the tinker

We can create the records, instead of using a seeder using tinker, like this:

```php
php artisan tinker

App\Models\Post::factory()->count(100)->create();

App\Models\Comment::factory()->count(100)->create()
```
Ctrl+C

### Try
```php
php artisan serve
```
http://127.0.0.1:8000/posts

## Change

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

### Useful packages

- [https://github.com/ribafs/laravel-migrations-generator](https://github.com/ribafs/laravel-migrations-generator)
- [https://github.com/ribafs/laravel-migration-generator](https://github.com/ribafs/laravel-migration-generator)
- [https://github.com/ribafs/migrations-generator](https://github.com/ribafs/migrations-generator)

- [https://github.com/ribafs/Replibyte-seed](https://github.com/ribafs/Replibyte-seed)
- [https://github.com/ribafs/iseed](https://github.com/ribafs/iseed)
- [https://github.com/ribafs/DbExporter](https://github.com/ribafs/DbExporter)


### References

https://www.nicesnippets.com/blog/how-to-create-a-one-to-many-relationship-in-laravel-9
