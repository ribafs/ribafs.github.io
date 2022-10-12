## Migrations and Seeders on Laravel 9

I really like using migrations and seeders, as it has great advantages over creating it by hand and also makes it compatible with the various supported DBMSs. Also facilitates the creation of fake data to try application. Good for testing as it is code. 

See this, being able to export the current bank with all the records:

[https://github.com/ribafs/iseed](https://github.com/ribafs/iseed)
[https://github.com/ribafs/DbExporter](https://github.com/ribafs/DbExporter)
[https://github.com/ribafs/Replibyte-seed](https://github.com/ribafs/Replibyte-seed)

### Create or access your application

cd application

### Create a migration

php artisan make:migration create_customers_table

Edit and update

database/migrations/2022_10_12_100303_create_customers_table.php

```php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->notNullable();
            $table->text('email')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    public function down()
    {
        Schema::drop('customers');
    }
}
```

### Create table

php artisan migrate


##$ Create seeder

php artisan make:seeder CustomersSeeder

Change database/seeders/CustomersSeeder.php to

```php
<?php
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CustomersSeeder extends Seeder
{
    public function run()
    {
          for($count=0;$count<10;$count++){
            DB::table('customers')->insert([
                'name' => Str::random(15),
                'email' => Str::random(10).'@gmail.com',
                'updated_at' => date("Y-m-d H:i:s"),
                'created_at' => date("Y-m-d H:i:s")                
            ]);
        }
    }
}
```

### DatabaseSeeder

Edit database/seeds/DatabaseSeeder.php 

```php
class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(CustomersSeeder::class);
    }
}
```

### Populate table

php artisan db:seed --class=CustomersSeeder

Create 10 registers

Or:

php artisan migrate:fresh --seed


### Try

php artisan serve

http://127.0.0.1:8000/customers/


Levei este pequeno tutorial para o grupo PHP Brasil e acabei fazendo um rápida pesquisa pela diferença entre factory e seeder.

### Factories e Seeders

Tradução livre de posts no Stackoverflow e no tutorial https://devnote.in/difference-between-factory-and-seeders-in-laravel/

Por que usamos factory e seeders em Laravel?

factory e seeders são usados ​​para gerar dados falsos ou de teste. Quando você usa Factory e Seeders, não precisa adicionar dados manualmente ao seu banco de dados.
seeders 

### O que são seeders?

seeder é uma classe. O Seeder é usado para criar dados falsos ou de teste usando o nome da tabela.

### O que é factory?

A factory é uma função auxiliar. A factory é usada para criar dados falsos ou de teste usando o modelo. Uma factory também é um objeto global. A factory usa uma classe Faker para gerar dados fictícios. A factory também pode gerar dados de relacionamento com o modelo que o seeder não pode fazer.


### Prefiro ver seeders e factorys de outra perspectiva.

Como mencionado por outros, as factorys de modelos são usadas para fins de teste e preenchimento de seu banco de dados com uma enorme quantidade de dados falsos. Isso pode ser usado para teste de unidade e teste de desempenho do seu sistema.

Por outro lado, as Classes seederas são usadas para inserir dados que são cruciais e importantes para o sistema operar. Algo como o superadministrador, funções básicas/permissões de funções no sistema, países, cidades e outros dados que podem não vir de CRUDs


Eu pesquisei para sua pergunta e encontrei algo simples como abaixo.

factory e seeder são usados ​​para gerar dados de teste para o aplicativo.

Factory: Ao usar as factorys, você pode criar facilmente dados de teste para seu aplicativo laravel com base em Model. Na factory estamos usando outra classe como Faker para gerar dados falsos facilmente.

Na factory também podemos gerar dados relacionados ao relacionamento enquanto no db seeder não podemos.
´´´php
factory(App\User::class, 50)->create()->each(function ($user) {
        $user->posts()->save(factory(App\Post::class)->make());
});
´´´

seeder: Ao usar o seeder, você pode criar dados de teste com base no nome da sua tabela. Como abaixo.


Você pode conferir aqui para mais informações:

https://laravel.com/docs/9.x/seeding#using-model-factories

https://laravel.com/docs/9.x/database-testing#writing-factories

seeder de banco de dados é usado para preencher tabelas com dados.

As factorys de modelos são um local centralizado conveniente para definir como seus modelos devem ser preenchidos com dados falsos.

Na classe seeder, você aproveitaria as factorys de modelos, e as factorys de modelos provavelmente usarão outra biblioteca para gerar dados falsos aleatórios, como phpfaker/faker.


