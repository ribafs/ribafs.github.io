## Tratamento de exceções no Laravel 9

Este artigo foi baseado no

[https://ribafs.github.io/backend/framework/laravel/crud-generator/](https://ribafs.github.io/backend/framework/laravel/crud-generator/)

Temos dois CRUDs, um de posts e outro de comments, relacionados pelo campo post_id em comments.

```php
php artisan serve
```
Acesse

http://127.0.0.1:8000/comments

Caso tente adicionar um comentário com user_id que não existe.

Verá o erro

```php
Illuminate \ Database \ QueryException
PHP 8.1.2
9.35.1
SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row: a foreign key constraint fails (`laravel`.`comments`, CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`))

insert into `comments` (`body`, `post_id`, `updated_at`, `created_at`) values (teste, 150, 2022-10-13 21:31:40, 2022-10-13 21:31:40)
```

Não é boa ideia mandar uma mensagem destas para um usuário usando o sistema em produção. Idealmente devemos interceptar o erro com um try catch e mandar uma mensagem nossa e em português para o usuário.

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

Adicionamos para a view comments/index.blade.php, logo abaixo do Add New, por exemplo. É bom que seja no início da view.

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

### Referência

https://www.itsolutionstuff.com/post/laravel-9-exception-handling-example-tutorialexample.html
