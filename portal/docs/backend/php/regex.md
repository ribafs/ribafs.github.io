## Introdução às Expressões Regulares em PHP

Expressões regulares, comumente conhecidas como "regex" ou "RegExp", são strings de texto especialmente formatadas usadas para encontrar padrões no texto. As expressões regulares são uma das ferramentas mais poderosas disponíveis hoje para processamento e manipulação de texto eficaz. Por exemplo, elas podem ser usadas para verificar se o formato dos dados, ou seja, nome, e-mail, número de telefone, etc. inserido pelo usuário estava correto ou não, localizar ou substituir a string correspondente no conteúdo do texto e assim por diante.

Uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa. Ao pesquisar dados em um texto, você pode usar esse padrão de pesquisa para descrever o que está procurando.
Uma expressão regular pode ser um único caractere ou um padrão mais complicado.

As expressões regulares podem ser usadas para executar todos os tipos de pesquisa e substituição de texto.

### Canivete suiço

As expressões regulares são consideradas um canivete suiço, pois tem uma grande quantidade de utilidades.

### Sintaxe

Em PHP, expressões regulares são strings compostas por delimitadores, um padrão e modificadores opcionais.

Exemplo:

$exp = "/w3schools/i";

No exemplo acima, / é o delimitador, w3schools é o padrão que está sendo pesquisado e i é um modificador que faz a pesquisa não diferenciar maiúsculas de minúsculas.

O delimitador pode ser qualquer caractere que não seja uma letra, número, barra invertida ou espaço. 

O delimitador mais comum é a barra (/), mas quando seu padrão contém barras, é conveniente escolher outros delimitadores como # ou ~.

### Funções do PHP para regex

- preg_filter — Perform a regular expression search and replace
- preg_grep — Retorna as entradas do array que combinaram com o padrão
- preg_last_error_msg — Returns the error message of the last PCRE regex execution
- preg_last_error — Retorna o código de erro da última regex PCRE executada
- preg_match_all — Perform a global regular expression match
- preg_match — Perform a regular expression match
- preg_quote — Adiciona escape em caracteres da expressão regular
- preg_replace_callback_array — Perform a regular expression search and replace using callbacks
- preg_replace_callback — Executa uma busca usando expressão regular e modifica usando um callback
- preg_replace — Realiza uma pesquisa por uma expressão regular e a substitui.
- preg_split — Divide a string por uma expressão regular

Nota: A função PHP preg_match() para de pesquisar depois de encontrar a primeira correspondência, enquanto a função preg_match_all() continua pesquisando até o final da string e encontra todas as correspondências possíveis em vez de parar na primeira correspondência.

### Sintaxe de Expressão Regular

A sintaxe de expressão regular inclui o uso de caracteres especiais (não confunda com os caracteres especiais HTML). Os caracteres que recebem um significado especial dentro de uma expressão regular são:

 . * ? + [ ] ( ) { } ^ $ | \. 
 
Você precisará adicionar uma barra invertida nesses caracteres sempre que quiser usá-los literalmente. Por exemplo, se você quiser corresponder a ".", terá que escrever \. . Todos os outros caracteres assumem automaticamente seus significados literais.

As seções a seguir descrevem as várias opções disponíveis para a formulação de padrões:

### Classes de caracteres

Os colchetes que cercam um padrão de caracteres são chamados de classe de caracteres, por exemplo: [abc]. Uma classe de caracteres sempre corresponde a um único caractere de uma lista de caracteres especificados, o que significa que a expressão [abc] corresponde apenas ao caractere a, b ou c.

As classes de caracteres negados também podem ser definidas para corresponder a qualquer caractere, exceto aqueles contidos entre colchetes. Uma classe de caractere negada é definida colocando um símbolo de acento circunflexo (^) imediatamente após o colchete de abertura, como este [^abc].

Você também pode definir um intervalo de caracteres usando o caractere hífen (-) dentro de uma classe de caracteres, como [0-9]. Vejamos alguns exemplos de classes de personagens:
```bash
RegExp 		O que faz

[abc] 		Corresponde a qualquer um dos caracteres a, b ou c.
[^abc] 		Corresponde a qualquer caractere diferente de a, b ou c.
[a-z] 		Corresponde a qualquer caractere de a minúsculo a z minúsculo.
[A-Z] 		Corresponde a qualquer caractere de a maiúsculo a z maiúsculo.
[a-Z] 		Corresponde a qualquer caractere de a minúsculo a Z maiúsculo.
[0-9] 		Corresponde a um único dígito entre 0 e 9.
[a-z0-9]	Corresponde a um único caractere entre aez ou entre 0 e 9.
```
### Exemplos

O exemplo a seguir mostrará como descobrir se um padrão existe ou não em uma string usando a expressão regular e a função PHP preg_match():
```php
<?php
$pattern = "/ca[kf]e/";
$text = "Ele está comendo cake no cafe.";
if(preg_match($pattern, $text)){
    echo "Encontrado cake!";
} else{
    echo "Match not found.";
}
```
### Também podemos usar a função preg_match_all()
```php
<?php
$pattern = "/ca[kf]e/";
$text = "Ele está comendo cake bo cafe.";
$matches = preg_match_all($pattern, $text, $array);
echo $matches . " encontrados: cake e cafe.";
```

### Classes de caracteres predefinidas

Algumas classes de caracteres, como dígitos, letras e espaços em branco, são usadas com tanta frequência que existem nomes de atalho para elas. A tabela a seguir lista essas classes de caracteres predefinidas:
```php
Atalho 	O que faz

. 		Corresponde a qualquer caractere único, exceto nova linha \n.
\d 		corresponde a qualquer caractere de dígito. Igual a [0-9]
\D 		Corresponde a qualquer caractere que não seja dígito. O mesmo que [^0-9]
\s 		Corresponde a qualquer caractere de espaço em branco (espaço, tabulação, nova linha ou caractere de retorno de carro). O mesmo que [ \t\n\r]
\S 		Corresponde a qualquer caractere que não seja espaço em branco. O mesmo que [^ \t\n\r]
\w 		Corresponde a qualquer caractere de palavra (definido como a a z, A a Z, 0 a 9 e o sublinhado). Igual a [a-zA-Z_0-9]
\W 		Corresponde a qualquer caractere que não seja palavra. O mesmo que [^a-zA-Z_0-9]
```
### Exemplos
```php
<?php
$str = "Visit W3Schools";
$pattern = "/w3schools/i";
echo preg_match($pattern, $str); // Outputs 1

<?php
$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";
echo preg_match_all($pattern, $str); // Outputs 4
```
### Usando a função preg_replace()

A função preg_replace() substituirá todas as correspondências do padrão em uma string por uma substring.


##3 Exemplos
```php
<?php
$str = "Visit Microsoft!";
$pattern = "/microsoft/i";
echo preg_replace($pattern, "W3Schools", $str); // Outputs "Visit W3Schools!"
```
### Modificadores de expressões regulares

i - executa busca case-insensitiva

m - Executa uma pesquisa de várias linhas (padrões que pesquisam o início ou o final de uma string corresponderão ao início ou ao final de cada linha)

u - Permite a correspondência correta de padrões codificados em UTF-8


### Quantificadores

Quantificador 	Descrição
```php
n+ 				Corresponde a qualquer string que contenha pelo menos um n
n* 				Corresponde a qualquer string que contenha zero ou mais ocorrências de n
n? 				Corresponde a qualquer string que contenha zero ou uma ocorrência de n
n{x} 			Corresponde a qualquer string que contenha uma sequência de X n's
n{x,y} 			Corresponde a qualquer string que contenha uma sequência de X a Y n's
n{x,} 			Corresponde a qualquer string que contenha uma sequência de pelo menos X n's
```
### Exemplos
```php
<?php
$str = "Apples and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match($pattern, $str); // Outputs 1

<?php
$str = "Apples and bananas and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match($pattern, $str); // Outputs 1

<?php
$str = "Apples and bananas and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match_all($pattern, $str); // Outputs 2
```
### Procurar por uma palavra exatamente

Para isso usamos o caractere que indica início e o caractere que indica final da string:
```php
echo preg_match("/^mother$/", "motherland"); // 0

echo preg_match("/^mother$/", "Who is your mother?"); // 0

echo preg_match("/^mother$/", "mother"); // 1
```

### Operador ou |

Exemplo
```php
<?php

$names = [ "Jane", "Thomas", "Robert", "Lucy", "Beky", "John", "Peter", "Andy" ];

$pattern = "/Jane|Beky|Robert/";

foreach ($names as $name) {
    if (preg_match($pattern, $name)) {
        echo "$name is my friend\n<br>";
    } else {
        echo "$name is not my friend\n<br>";
    }
}
```

### Testador de expressões regulares online

https://regex101.com/

Suporta PHP 7.3 ou superior, inferior a 7.3, Java, Phyton, Go, .Net. O default é 7.3 ou superior


#### Exemplo de uso. 

Nas textarea TEST STRING entre:

Apples and bananas

Na caixa de texto acima entre:

/ba(na){2}/i

Veja que acima e à direita aparece a mensagem em verde: 1 match

#### Outro exemplo

Mude o texto para:

Apples and mangas

Veja que a mensagem diz: no match


### Acima do PHP 7.3 devemos usar apenas as funções PCRE2 do PHP

[https://www.php.net/manual/pt_BR/ref.pcre.php](https://www.php.net/manual/pt_BR/ref.pcre.php)

### Testador online

[https://regex101.com/](https://regex101.com/)


### Exemplo de uso

Entrar na área central (textarea):

123abc

Entrar acima na caixa REGULAR EXPRESSION

[A-Za-z]{3}

Veja acima e à direita que mostra a mensagem em verde: 1 match

#### Mude o texto para

123ab

E veja na mensagem que já não encontra, pois a expressão regular quer 3 letras e só temos duas.

#### Agora

123abc

Ele achou 2 séries de 3 vogais.

#### Agora

123abcdef

Agora achou 3 séries.


### Referências

- [https://www.tutorialrepublic.com/php-tutorial/php-regular-expressions.php](https://www.tutorialrepublic.com/php-tutorial/php-regular-expressions.php)
- [https://www.tutorialrepublic.com/php-tutorial/php-exception-handling.php](https://www.tutorialrepublic.com/php-tutorial/php-exception-handling.php)
- [https://www.w3schools.com/php/php_regex.asp](https://www.w3schools.com/php/php_regex.asp)
- [https://zetcode.com/php/regex/](https://zetcode.com/php/regex/)


