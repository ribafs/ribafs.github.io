## Introdução ao uso de URL com PHP

Em qualquer linguagem de programação para a web que seja como o PHP, sempre que um usuário inserir uma URL específica no navegador, essa solicitação será passada para o servidor de nomes de domínio específico. Em seguida, o servidor de domínio retornará um endereço IP atribuído e prosseguirá para o servidor de hospedagem que hospeda um blog/site/aplicativo. Em seguida, um navegador solicita uma página do servidor web com a ajuda do endereço IP que é realmente especificado pelo servidor de nomes de domínio. Em seguida, esse servidor Web retornará a página para um endereço IP que está realmente especificado pelo navegador que está solicitando a página. Essa página que apareceu no navegador pode conter muitas outras URLs que podem conter muitas páginas do servidor, muitas imagens, etc. A URL pode ser qualquer coisa como www.educba.com ou qualquer outra coisa parecida.

### Funções do PHP que lidam com URL

- base64_decode — Decodifica dados codificados com MIME base64
- base64_encode — Codifica dados com MIME base64
- get_headers — Retorna todos os cabeçalhos enviados pelo servidor em resposta a uma requisição HTTP
- get_meta_tags — Extrai as informações das tag meta de um arquivo e retorna como uma matriz
- http_build_query — Gera a string de consulta (query) em formato URL
- parse_url — Interpreta uma URL e retorna os seus componentes
- rawurldecode — Decodifica uma URL
- rawurlencode — Codifica uma URL de acordo com RFC 3986
- urldecode — Decodifica uma URL codificada
- urlencode — Codifica uma URL

[https://www.php.net/manual/pt_BR/ref.url.php](https://www.php.net/manual/pt_BR/ref.url.php)

### parse_url()

Interpreta uma URL e retorna os seus componentes

#### Exemplos

```php
<?php
$url = 'http://username:password@hostname:9090/path?arg=value#anchor';

var_dump(parse_url($url));
var_dump(parse_url($url, PHP_URL_SCHEME));
var_dump(parse_url($url, PHP_URL_USER));
var_dump(parse_url($url, PHP_URL_PASS));
var_dump(parse_url($url, PHP_URL_HOST));
var_dump(parse_url($url, PHP_URL_PORT));
var_dump(parse_url($url, PHP_URL_PATH));
var_dump(parse_url($url, PHP_URL_QUERY));
var_dump(parse_url($url, PHP_URL_FRAGMENT));
```

O exemplo acima irá imprimir:
```php
array(8) {
  ["scheme"]=>
  string(4) "http"
  ["host"]=>
  string(8) "hostname"
  ["port"]=>
  int(9090)
  ["user"]=>
  string(8) "username"
  ["pass"]=>
  string(8) "password"
  ["path"]=>
  string(5) "/path"
  ["query"]=>
  string(9) "arg=value"
  ["fragment"]=>
  string(6) "anchor"
}
string(4) "http"
string(8) "username"
string(8) "password"
string(8) "hostname"
int(9090)
string(5) "/path"
string(9) "arg=value"
string(6) "anchor"

<?php
$url = '//www.example.com/path?googleguy=googley';

// Prior to 5.4.7 this would show the path as "//www.example.com/path"
var_dump(parse_url($url));


//O exemplo acima irá imprimir:

array(3) {
  ["host"]=>
  string(15) "www.example.com"
  ["path"]=>
  string(5) "/path"
  ["query"]=>
  string(17) "googleguy=googley"
}
```
### Funções auxiliares

#### array_chunk()

Divide um array em pedaços

#### Exemplo

```php
<?php
$input_array = array('a', 'b', 'c', 'd', 'e');
print_r(array_chunk($input_array, 2));
print_r(array_chunk($input_array, 2, true));
```

O exemplo acima irá imprimir:
```php
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [0] => c
            [1] => d
        )

    [2] => Array
        (
            [0] => e
        )

)
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [2] => c
            [3] => d
        )

    [2] => Array
        (
            [4] => e
        )

)
```

### array_slice()

Extrai uma parcela de um array

#### Exemplos

```php
<?php
$input = array("a", "b", "c", "d", "e");

$output = array_slice($input, 2);      // retorna "c", "d", e "e"
$output = array_slice($input, -2, 1);  // retorna "d"
$output = array_slice($input, 0, 3);   // retorna "a", "b", e "c"

// Obverse as diferenças nas chaves retornadas
print_r(array_slice($input, 2, -1));
print_r(array_slice($input, 2, -1, true));
```

O exemplo acima irá imprimir:
```php
Array
(
    [0] => c
    [1] => d
)
Array
(
    [2] => c
    [3] => d
)
```

```php
<?php
$input = array(1 => "a", "b", "c", "d", "e");
print_r(array_slice($input, 1, 2));
```

O exemplo acima irá imprimir:
```php
Array
(
    [0] => b
    [1] => c
)
```
Exemplo #3 array_slice() com chaves mistas
```php
<?php
$ar = array('a'=>'apple', 'b'=>'banana', '42'=>'pear', 'd'=>'orange');
print_r(array_slice($ar, 0, 3));
print_r(array_slice($ar, 0, 3, true));
```

O exemplo acima irá imprimir:
```php
Array
(
    [a] => apple
    [b] => banana
    [0] => pear
)
Array
(
    [a] => apple
    [b] => banana
    [42] => pear
)
```

### str_split()

Converte uma string para um array

#### Exemplos

```php
<?php

$str = "Hello Friend";

$arr1 = str_split($str);
$arr2 = str_split($str, 3);

print_r($arr1);
print_r($arr2);
```

O exemplo acima irá imprimir:
```php
Array
(
    [0] => H
    [1] => e
    [2] => l
    [3] => l
    [4] => o
    [5] =>
    [6] => F
    [7] => r
    [8] => i
    [9] => e
    [10] => n
    [11] => d
)

Array
(
    [0] => Hel
    [1] => lo 
    [2] => Fri
    [3] => end
)
```

### array_search()

Procura por um valor em um array e retorna sua chave correspondente caso seja encontrado

#### Exemplo
```php
<?php
$array = array(0 => 'blue', 1 => 'red', 2 => 'green', 3 => 'red');

$key = array_search('green', $array); // $key = 2;
$key = array_search('red', $array);   // $key = 1;
```

### $_GET

Variáveis HTTP GET

Um array associativo de variáveis passadas para o script atual via os parâmetros da URL (também conhecidos como query string). Note que o array não é preenchido apenas para solicitações GET, mas também para todas requisições com uma query string. 

### Exemplo

index.html

<a href="teste.php?nome=Ribamar">Teste</a>

teste.php
```php
<?php
if(isset($_GET['nome'])){
	echo 'Olá ' . htmlspecialchars($_GET["nome"]) . '!';
}
```
### Desvantagens do método GET

Como alguns dados que serão enviados pelo método GET da linguagem PHP serão exibidos na URL, só será possível marcar a página que está com os valores de consulta específicos da string. O método GET ajudará as solicitações de métodos específicos que podem ser armazenadas em cache e as solicitações do método Get permanecem no histórico do nosso navegador. As solicitações do método Get podem/serão marcadas.

O método POST não envia as variáveis pela URL e assim é mais seguro.

https://www.educba.com/php-get-method/


### Exemplos
```php
<?php
$uri = $_SERVER['REQUEST_URI'];
echo $uri; // Outputs: URI
 
$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
 
$url = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
echo $url; // Outputs: Full URL
 
$query = $_SERVER['QUERY_STRING'];
echo $query; // Outputs: Query String
```

[https://zetcode.com/php/curl/](https://zetcode.com/php/curl/)

### Método splitUrl() da classe Router

   	  // Verificar se a url foi setada
      if (isset($_GET['url'])) {
          // dividir a URL em partes
          $url = trim($_GET['url'], '/'); // A origem deste url é o public/.htaccess
          $url = filter_var($url, FILTER_SANITIZE_URL); // Filtrar a url de caracteres estranhos a uma url
          $url = explode('/', $url); // Criar um array com as aprtes da url: controller/action/params

          $this->urlController = isset($url[0]) ? $url[0] : null; // Criando a $this->urlController com $url[0]
          $this->urlAction = isset($url[1]) ? $url[1] : null; // Criando a $this->urlAction com $url[1]

          unset($url[0], $url[1]);// Limpar $url[0] e $url[1]
          $this->urlParams = array_values($url); // Criando a $this->urlParams com array_values($url)
      }

[https://github.com/ribafs/php-router/blob/main/Core/Router.php](https://github.com/ribafs/php-router/blob/main/Core/Router.php)


