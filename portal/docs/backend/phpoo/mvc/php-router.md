# Sistema de rotas simples

### Para aplicativo PHP com MVC

[https://github.com/ribafs/php-router](https://github.com/ribafs/php-router)

O sistema de rotas mais simples que conheço usado em aplicativos PHP com MVC.

Pesquisei e estudei uma boa quantidade de projetos em PHP com rotas para MVC, que fossem simples, na busca do Github

[https://github.com/search](https://github.com/search)

Como já relatei, a minha intenção era não somente usar, mas principalmente entender e poder explicar. Como não sou um expert em PHP, principalmente em MVC e rotas, precisava encontrar um projeto simples.

Eu especificava nas buscas que queria algo simple. Mas isso me reforça a ideia de que simplicidade é algo bem relativo, pois a maioria retornava algo que ao meu ver não era simples. Simples para alguém que tem um forte domínio sobre um assunto é algo bem diferente para alguém que está iniciando no assunto.

## Qual a melhor linguagem de programação?

### A melhor linguagem é aquela que você tem maior domínio

Em termos práticos é isso mesmo.

Então baixei, instalei e estudei vários projetos. Uma ideia que concordo eu vi reforçada, a de que não existe a melhor linguagem de programação em termos absolutos e para qualquer projeto, a melhor linguagem de programação que existe é aquela que você tem maior domínio. Trazendo para as rotas, depois de estudar vários projetos, acabei customizando uma classe de rota de um aplicativo que conheço e tenho customizado algumas vezes:

[https://github.com/panique/mini3](https://github.com/panique/mini3)

## Reinventar a rota pode ser importante

Eu quero aproveitar e comentar algo aqui sobre "reinventar a roda". Reinventar a roda pode ser algo útil por alguns motivos:

- Se eu estiver precisando de uma roda diferente de todas as que conheço
- Se eu quizer aprender como se cria uma roda
- Se eu quizer ensinar como se cria uma roda

## Muitos andam sobrecarregados de trabalho

Minha opinião: acredito que não deveríamos concordar com "em time que genha não se mexe" nem fugir de customizações para otimização. Este comportamento denuncia que estamos sobrecarregados de trabalho e queremos apenas concluir o que temos para fazer. Então nosso trabalho não melhora, não evolui, não é otimizado. Acho compreensível, mas acho importante refatorar, otimizar, melhorar, simplificar, etc.

Falando diretamente, fiquei contente em ter encontrado um aplicativo em PHP usando MVC com rotas, que eu tenha conseguido entender e customizar. Como é algo diferente do habitual e em especial as rotas são em geral mais complexas, vejo a dificuldade de alguns colegas iniciantes sobre este assunto, eu acabo de efetuar uma refatoração do aplicativo que criei para o livro de PHPOO, tornando-o mais simples e fácil de entender e coloquei no repositório, seção atualizacoes:

[https://github.com/ribafs/phpoo-livro](https://github.com/ribafs/phpoo-livro)

## Rotas automáticas

Quanto à classe Router, que no mini3 chama-se Application, é a peça de código mais trabalhosa de entender, por isso andei procurando alternativa. Acontece que a customisei várias vezes e acabei conhecendo-a melhor. Isso me levou a criar uma versão bem mais simples. A classe original é automática, ou seja, se eu adicionar mais um CRUD ao aplicativo ele será suportado sem qualquer alteração na classe. A que está neste aplicativo

[https://github.com/ribafs/phpoo-livro/tree/main/atualizacoes/php-router2](https://github.com/ribafs/phpoo-livro/tree/main/atualizacoes/php-router2)

## Sistema de rotas simples

Já a classe simples que criei, não, ela é meio manual, pois cada CRUD adicionado precisará de uma nova seção de código para comtemplá-lo. Como me deu trabalho de encontrar algo parecido eu criei um repositório exclusivo para este projeto de rotas, onde uso praticamente o mesmo aplicativo do livro, mas refatorado, simplificado e usando as rotas simplificadas:

[https://github.com/ribafs/php-router](https://github.com/ribafs/php-router)

Inclusive com um forum de discussão no repositório caso queira trocar ideias

