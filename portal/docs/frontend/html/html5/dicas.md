## HTML 5

O HTML5 é a nova versão do HTML4 e um dos seus principais objetivos é facilitar a manipulação dos elementos, possibilitando o desenvolvedor modificar as características dos objetos de forma não intrusiva, fazendo com que isso fique transparente para o usuário final.

Para se ter uma ideia disso, diferente das versões anteriores, o HTML5 fornece ferramentas para o CSS e o Javascript fazerem seu trabalho da melhor possível de forma que um web site ou aplicação continue leve e funcional.

Algumas tags foram modificadas, outras criadas e algumas descontinuadas. As versões anteriores do HTML não eram padronizadas para criação de seções comuns e específicas como rodapé, cabeçalho, slidebar, menus etc.

Houve também modificações na forma em que escrevemos o código e organizamos a página. Ela passou a ser mais semântica com menos códigos, aumentando a interatividade sem a necessidade de instalação de plug-ins, que em alguns casos, causa perda de performance. É um código interpolável, ou seja, pronto para futuros dispositivos, facilitando a reutilização da informação de diversas maneiras.

<a href="https://www.devmedia.com.br/o-que-e-o-html5/25820" target="_blank">https://www.devmedia.com.br/o-que-e-o-html5/25820</a>

### O HTML 5 trouxe um novo DOCTYPE
```html
<!DOCTYPE html>
```

#### Estrutura básica de página com HTML 5
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### Forma semântica de adicionar uma imagem com HTML 5
```html
<figure>
    <img src="path/to/image" alt="Sobre a Imagem" />
    <figcaption>
	<p>Isso é uma imagem de algo interessante. </p>
    </figcaption>
</figure>
```

#### Sem Mais Types Para Scripts e Links

Você, possívelmente, ainda adiciona o atributo type às suas tags link e script.
```html	
<link rel="stylesheet" href="path/to/stylesheet.css" type="text/css" />
<script type="text/javascript" src="path/to/script.js"></script>
```
Isso não é mais necessário. Está implícito que ambas as tags referem-se a folhas de estilo e scripts, respectivamente. Assim, podemos remover o atributo type por completo.
```html	
<link rel="stylesheet" href="path/to/stylesheet.css" />
<script src="path/to/script.js"></script>
```

### Torne Seu Conteúdo Editável

Os novos navegadores tem um novo atributo interessante, que pode ser adicionado aos elementos, chamado de contenteditable. Como o nome implica, isso permite que o usuário edite qualquer texto contido dentro do elemento, até incluindo os filhos do elemento. Há inúmeros usos para algo assim, incluindo as simples listas de tarefas, que também podem lançar mão do armazenamento local.
```html	
<!DOCTYPE html>
 
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>untitled</title>
</head>
<body>
    <h2> Lista de Tarefas </h2>
   <ul contenteditable="true">
<li> Quebrar um motorista robô. </li>
<li> Dirigir até uma fábrica abandonada
<li> Ver vídeos de mim mesmo </li>
</ul>
</body>
</html>
```
Ou, como aprendemos na dica anterior, poderíamos ter escrito como:
```html	
<ul contenteditable=true>
```

<a href="https://code.tutsplus.com/pt/tutorials/28-html5-features-tips-and-techniques-you-must-know--net-13520" target="_blank">https://code.tutsplus.com/pt/tutorials/28-html5-features-tips-and-techniques-you-must-know--net-13520</a>


