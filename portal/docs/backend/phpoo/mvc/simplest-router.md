## Simplest Router

Meu segundo ou terceiro projeto com "simplest"/o mais simples. Isso não é somente para chamar a atenção (não gosto dos click bytes), é por conta de que este, de fato, é o sistema de rotas para PHP mais simples que conheço.

Como pesquisei e estudei muito diversos sistemas de rota e tutoriais e um colega relatou que o sistema criado anteriormente não era intuitivo (e tem razão). Veja o caso do framework mini3 ([https://github.com/panique/mini3](https://github.com/panique/mini3)), o que mais me deu trabalho para entender e customizar foi a classe de rotas. Então novas pesquisas e novos testes. Até que me deparei com este projeto:

[https://github.com/Izamzawi/blog-php-mvc](https://github.com/Izamzawi/blog-php-mvc)

Este projeto tem uma classe bem parecida com a que eu pensava.

Juntando com o conhecimento anterior criei este projeto, que chamei de simplest-router.

Algo chamou muito a minha atenção. Pesquisando sistemas de rotas no [https://packagist.org,](https://packagist.org) o mais popular deles é o FastRoute do Nikic:

[https://packagist.org/packages/nikic/fast-route](https://packagist.org/packages/nikic/fast-route)

Foram feitos mais de 41 milhões do mesmo: 41 091 898 até hoje (02/10/2022).

Mas não consegui testá-lo em meu desktop de primeira. Como estava tentando usar em uma subpasta do servidor web. Não funcionava. Depois percebi que precisa ficar em um aplicativo que ocupe toda a pasta do virtual-host ou então usar o servidor nativo do PHP. O nosso framework PHP mais popular também é assim, em produção requer a pasta do servidor web somente para ele, por default.

Então saí pesquisando mais ainda, pois um pacote tão popular como este, eu deveria encontrar alguém que falasse de seu uso com subpasta e também com MVC. Até que encontrei o site:

[https://hotexamples.com/](https://hotexamples.com/)

Onde existem vários exemplos usando o fastroute.

[https://hotexamples.com/examples/-/-/FastRoute%5CsimpleDispatcher/php-fastroute%5Csimpledispatcher-function-examples.html](https://hotexamples.com/examples/-/-/FastRoute%5CsimpleDispatcher/php-fastroute%5Csimpledispatcher-function-examples.html)

Com ele consegui criar um aplicativo em PHP com MVC usando o fastroute. Mas nesta altura já havia despertado o interesse de criar minha própria classe de rotas, mas que seja bem simples, para uso pelos programadores mortais, que suporte o uso em subpasta e também voltada para MVC e tão simples que pode ter uso genérico com facilidade.

Caso você esteja procurando um sistema de rotas bem simples e queira dar uma olhada, veja no repositório abaixo:

[https://github.com/ribafs/simplest-router](https://github.com/ribafs/simplest-router)

Além de realmente simples de entender (ao meu ver), ele também tem bons recursos:

Versões som suporte para

- PHP 8.1
- PHP 7.4
- PHP 5.5

- Namespace
- Require
- Classes fixas

- MySQL/MariaDb
- PostgreSQL

Criei um fórum de discussão no repositório para tirar dúvidas e receber sugestões:

[https://github.com/ribafs/simplest-router/discussions](https://github.com/ribafs/simplest-router/discussions)

Como na minha busca não encontrei algo assim, então resolvi criar também em inglês e acabei descobrindo algo interessante.

Redirecionar o usuário para a versão corresponente ao idioma que o jS detectou em seu navegador.

Criei duas versões: pt-BR e en-US. Se o navegador usar pt-BR irá para sua pasta. Se usar uma linguagem diferente (else) vai para a pasta en-US. Acho que ficou bom, pois o munto inteiro praticamente fala inglês.

Se o usuário acessa a Github page usando um navegador em inglês

[https://ribafs.github.io/simplest-router](https://ribafs.github.io/simplest-router)

Ela vai ser redirecionado para a pasta en-US do repositório.

Estou criando um micro framework que usa o ribafs/simplest-router, para melhor exemplificar seu uso.

02 de outubro de 2022


