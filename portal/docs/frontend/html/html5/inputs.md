## Inputs e stributos do HTML5

Abaixo está uma lista de alguns dos novos tipos de input e atributos associados apresentados no HTML5:

### Descrições dos novos input types

- **Color**: Permite ao usuário selecionar uma cor.
- **Date**: Cria um campo para que o usuário possa selecionar uma data.
- **Time**: Permite ao usuário selecionar hora.
- **Datetime**: Cria dois campos uma para data e outro da hora (com fuso horário), permitindo assim o usuário selecionar os dois juntos.
- **Month**: Serve para selecionar um mês e um ano.
- **Week**: Para definir uma semana e um ano.
- **DateTime-Local**: Permite ao usuário selecionar uma hora e data (sem fuso).
- **E-mail**: É um campo de entrada onde deve ser inserido um endereço de e-mail.
- **Number**: É utilizado para campos que devem apenas conter números, podendo ter seus limites (maior e menor valor aceitos) definidos.
- **Range**: É utilizado para campos de entrada que devem receber um valor a partir de uma variação de números.
- **Search**: É usado para fazer pesquisas, mas na pratica se comporta como um campo de texto comum.
- **Tel**: Serve para números de telefone, mas até o momento nenhum dos principais navegadores oferece suporte a esse tipo.
- **Url**: É usado para campos de entrada onde você recebee um endereço URL, o valor do campo é validado automaticamente quando o formulário é enviado.
    
### datalist

Ao clicar na caixa de texto aparece uma lista com os termos dos options

```html    
    <label for="gender">Gender ??</label>
      <input list="genders" name="gender" id="gender">
      <datalist id="genders">
        <option value="female">
        <option value="male">
        <option value="other">
      </datalist>
```

### Os novos atributos do HTML5 incluem:
```html
    required
    autofocus
    autocomplete
    placeholder
    minlength
    readonly
    pattern
    list
```
#### Alguns exemplos

Ao abrir a página este campo já recebe automaticamente o foco
```html
<input type="text" class="field" id="orderName" autofocus />

<input type="number" name="age" min="18" max="90" required>

ou
<input type="text" name="someInput" required="required">

<label>Data de Nascimento:</label><br/>
    <input  type="date" required min="1938-01-01" max="2000-12-31"/>

<input type="password" required pattern="^(?=.**\d)[0-9a-zA-Z]{6,}$" title="Password should be a minimum of 6 character long and must contain at least one number">

Não é HTML 5 mas é importante citar
<input type="hidden" id="indexNumber" name="indexNumber" value="00202010">

<input type="time">

<input type="color">
 
<input type="datetime-local">

<input type="week">

<input type="email" id="orderEmail" placeholder="ex. name@domain.com" />

<input type="month" name="mes" id="mes">

<input type="number">

Criação de Sliders Com o Campo Range

<input type="range" min="1" max="10" step="1" />

<form method="post">
    <h1> Votador de Grandiosidade do "Total Recall" </h1>
    <input type="range" name="range" min="0" max="10" step="1" value="">
    <output name="result">  </output>
</form>

<input type="search">

<input type="tel" placeholder="xxx-xxx-xxxx" />

Caso não atenda ao padrão receberá a mensagem: Atenda ao formato solicitado. Número não confere com o padrão
<input type="tel" required placeholder="(88) 88888-8888" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}" title="Numero não confere com o padrão."/>

<input type="tel" id="orderTelephone" pattern="\(\d\d\d\) \d\d\d\-\d\d\d\d" title="(xxx) xxx-xxxx" />

<input type="url" placeholder="https://www..." />

<audio autoplay="autoplay" controls="controls">
    <source src="file.ogg" />
    <source src="file.mp3" />
    <a>Download this file.</a>
</audio>

<video controls preload>
    <source src="cohagenPhoneCall.ogv" type="video/ogg; codecs='vorbis, theora'" />
    <source src="cohagenPhoneCall.mp4" type="video/mp4; 'codecs='avc1.42E01E, mp4a.40.2'" />
    <p> Seu navegador é antigo. <a href="cohagenPhoneCall.mp4">Ao invés disso, baixe o arquivo.</a> </p>
</video>

Apenas letras

<input type="text" required="required" name="text" pattern="[a-z\s]+$" />

Apenas números

<input type="text" required="required" name="numbers" pattern="[0-9]+$" />

Data

<input type="date" required="required" maxlength="10" name="date" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="2012-01-01" max="2014-02-18" />

Hora

<input type="time" required="required" maxlength="8" name="hour" pattern="[0-9]{2}:[0-9]{2} [0-9]{2}$" />

Campos genéricos de texto

<input type="text" required="required" name="name" />

Telefone

<input type="tel" required="required" maxlength="15" name="phone" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" />

Email

<input type="email" required="required" class="input-text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

Moeda

<input type="tel" required="required" maxlength="15" name="valor" pattern="([0-9]{1,3}\.)?[0-9]{1,3},[0-9]{2}$" />

Utilizei o type=”tel”, pq em celulares renderiza melhor o teclado.

Input file

<input type="file" name="file" accept="image/**" required="required" />
```

