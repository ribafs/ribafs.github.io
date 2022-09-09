## Introdução ao .htaccess

Uma introdução para despertar o interesse por este arquivo tão importante.

Este é um arquivo de configuração do Apache, servidor web.

### Canivete suiço

O .htaccess é t ambém considerado um canivete suiço do Apache, pois é muito versátil e se pode fazer muito com ele.

### Configuração no Apache

É o primeiro arquivo lido pelo Apache sempre que algum visitante entra no site/aplicativo. Ele funciona como um manual de instruções que diz para o Apache que pastas podem ser acessadas, que imagens podem ser visualizadas por outros sites, se as URL serão amigáveis com o mod_rewrite, se deve redirecionar para uma pasta ou arquivo e várias outras configurações.

Por conta da segurança ele é um arquivo iniciado com um ponto, que num servidor linux é um arquivo oculto.

Para que seja eprmitido o uso dos arquivos .htaccess num servidor precisamos configurar o Apache para isso:

No apache2.conf ou no httpd.conf
```bash
<Directory /var/www/>
...
	AllowOverride All
...
```
Então reiniciar o Apache

Impedir a listagem de diretórios

Quando termos alguns arquivos em um diretório e não queremos que eles sejam acessados diretamente, mas somente através de links no index.html ou index.php:

Criamos nesse diretório um arquivo .htaccess contendo a linha:

Options -Indexes

### Usar URL amigáveis

Quando temos o módulo mod_rewrite do Apache habilitado, podemos habilitar as URL amigáveis com:

RewriteEngine On

### Forçar download de arquivos de mídia

Quando temos em um diretório arquivos de midia e não queremos que sejam visualizados, mas ao contrário baixados
```bash
AddType application/octet-stream .zip .mp3 .mp4
```
### Redirecionamento

Mapeiar todas as requisições que chegam no diretório atual ^(.*) para a pasta public/
```bash
RewriteRule ^(.*) public/$1 [L]

    %{REQUEST_FILENAME} -> Contém o nome do script requisitado
    %{REMOTE_ADDR} -> Contém o IP que enviou a requisição
    %{HTTP_REFERER} -> Contém o domínio que enviou a requisição
    %{QUERY_STRING} -> Contém somente QueryString da URL
    %{REQUEST_METHOD} -> Contém o método usado na requisição POST, GET, PUT, HEAD.

RewriteCond %{REQUEST_FILENAME} !-f -> Nesse caso sempre que for requisitado um arquivo (script) “-f” as regras de redirecionamento não serão aplicadas, porque estamos usando o carácter de negação “!“.

RewriteCond %{REQUEST_FILENAME} !-d -> Agora estamos verificando se foi requisitado um diretório “-d“, caso sim as regras de redirecionamento também não serão aplicadas, porque estamos usando o carácter de negação “!“.
```
Importante citar que as condições e regras são aplicadas na ordem em que são lidas no arquivo .htaccess, ou seja, de cima para baixo.

### Ativar a engine de reescrita
```bash
RewriteEngine on
```
### Se NÃO for um arquivo executar as regras
```bash
RewriteCond %{REQUEST_FILENAME} !-f
```
### Se NÃO for um diretório executar as regras
```bash
RewriteCond %{REQUEST_FILENAME} !-d
```
### Redireciona para index.php se atender as condições acima
```bash
RewriteRule ^(.*)$ index.php
```
### Forçar o uso do SSL/HTTPS
```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://seu-site.com.br/$1 [R,L]
```

### Flag [L] regra se torna independente
### Flag [NC] regrac case insensitive
```bash
RewriteRule ^(.*)$ index.php [L,NC]
```
$1 é o primeiro grupo capturado de sua expressão regular; ou seja, o conteúdo entre ( and ). Se você tivesse um segundo conjunto de parênteses em sua regex, $2 conteria o conteúdo desses parênteses. Aqui está um exemplo:
```bash
RewriteRule ([a-z0-9/-]+)-([a-z]+).html$ $1-$2.php [NC,L,QSA]
```
Digamos que um usuário navegue para hello-there.html. Eles seriam servidos hello-there.php. Em sua string de substituição, $1 contém o conteúdo do primeiro conjunto de parênteses (hello), enquanto $2 contém o conteúdo do segundo conjunto (there). Sempre haverá exatamente tantos valores de "dólar" disponíveis em sua string de substituição quanto conjuntos de parênteses de captura em sua regex.

Se você tiver parênteses aninhados, digamos, (([a-z]+)-[a-z]+), $1 sempre se refere à captura mais externa (neste caso, toda a regex), $2 é o primeiro conjunto aninhado e assim por diante.

### Exemplos para redirecionamento

### Do raiz

#### Enable the mod_rewrite
```bash
RewriteEngine on
```
#### Redirect all requests to the public/ directory
```bash
RewriteRule ^(.*) public/$1 [L]
```
Redireciona para o public/


### Do public/
```bash
Options -MultiViews
RewriteEngine On
Options -Indexes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule ^(.+)$ index.php?url=$1 [QSA,L]
```
Redireciona para o index.php de public/

### Referências

- [https://www.dirceuresende.com/blog/utilidades-do-arquivo-htaccess/](https://www.dirceuresende.com/blog/utilidades-do-arquivo-htaccess/)
- [https://www.askapache.com/htaccess/](https://www.askapache.com/htaccess/)
- [http://www.devwilliam.com.br/extra/web/arquivos-htaccess-apache](http://www.devwilliam.com.br/extra/web/arquivos-htaccess-apache)
- [https://blog.saninternet.com/htaccess](https://blog.saninternet.com/htaccess)

