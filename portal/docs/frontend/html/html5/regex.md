### Introdução às Expressões Regulares em HTML 5

São geralmente usadas para validar formulários no HTML 5

Nos campos do tipo:
- text
- email
- number
- url
- tel

### Exemplos
```html
<input type="text" name="uname" pattern="[a-zA-Z0-9]+" minlength="4" maxlength="10">

<input type="email" pattern=".+@tutsplus\.com|.+@envato\.com">

<form>
  <label for="name">Name: *</label>
  <input type="text" id="name" name="name" pattern="[a-zA-Z]+" placeholder="Monty" required>
  <br>
  <label for="name">Company Email Address: *</label>
  <input type="email" id="email" name="email" placeholder="joe@company.com" pattern=".+@company\.com" required>
  <br>
  <label for="name">Age: </label>
  <input type="number" id="age" name="age" min="10" max="80" placeholder="30">
  <br>
  <label for="name">Favorite Tuts+ Website: *</label>
  <input type="url" id="website" name="website" pattern="https://.*\.tutsplus\.com" placeholder="https://code.tutsplus.com" required>
</form>
```

### Expressões usadas frequentemente
```html
[a-zA-Z0-9-_]{4, 24}

[a-zA-Z][a-zA-Z0-9-_]{4,24}
```
### Validando números de telefone
```html
\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})
```
### Validando e-mail
```html
(\w\.?)+@[\w\.-]+\.\w{2,4}
```
### Validando URL
```html
[(http(s)?):\/\/(www\.)?\w-/=#%&\.\?]{2,}\.[a-z]{2,}([\w-/=#%&\.\?]*)
```
### Validando código de país com 3 letras
```html
[A-Za-z]{3}
```
### Validando CPF

CSS para deixar as letras digitadas em vermelho com fundo róseo (invalid) quando não atenderem ao padrão solicitado e pretas com fundo branco quando atenderem
```html
<style>
	input[type="text"] { background-color: white; color: black; }
	input:invalid      { background-color: #fcc ; color: red; }
</style>

<form name="cadastro1">
   CPF:
   <input type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}">
   <input type="submit">
</form>
```
Ao digitar um CPF inválido, o input deve ficar com fundo e letra vermelhos. Ao tentar enviar o CPF inválido:<br>
- O formulário não deve ser enviado<br>
- Deve aparecer uma mensagem de erro padrão, perto do input<br>
- Na mensagem de erro também deve aparecer o conteúdo de title

### Dicas do Aurélio

- [https://aurelio.net/regex/html5/](https://aurelio.net/regex/html5/)

### Referências

- [https://code.tutsplus.com/tutorials/a-simple-regex-cheat-sheet--cms-31278](https://code.tutsplus.com/tutorials/a-simple-regex-cheat-sheet--cms-31278)
- [https://code.tutsplus.com/tutorials/form-input-validation-using-only-html5-and-regex--cms-33095](https://code.tutsplus.com/tutorials/form-input-validation-using-only-html5-and-regex--cms-33095)
- [https://www.w3schools.com/tags/att_input_pattern.asp](https://www.w3schools.com/tags/att_input_pattern.asp)
- [https://aurelio.net/regex/html5/](https://aurelio.net/regex/html5/)


