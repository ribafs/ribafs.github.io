# reduce()

Método do Javascript que busca reduzir todo um array para um único elemento. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor de qualquer tipo.

### Sintaxe

#### ES5 e ainteriores
```js
const novoValor = arrayBase.reduce(function(acumulador, valorAtual, indice, array) {
// Faça algo com o acumulador e valueAtual (indice, array, e valorInicial são opcionais)
}, valorInicial);
```
#### ES6 
```js
const novoValor = arrayBase.reduce((acumulador, valorAtual, indice, array) =>
// Faça algo com o acumulador e valueAtual (indice, array, e valorInicial são opcionais), valorInicial);
```
Com ES5 se usa function (callback) e chaves {} e com ES6 somente usa-se =>

### Descrição

O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos.

#### Somando/iterando sem reduce (com for)
```js
let numbers = [1, 2, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
```
### Exemplo usando o ES5
```js
const numbers = [1,2,3,4,5]
const sum = numbers.reduce(function(accumulator, initialValue){
  return accumulator + initialValue
},0)
console.log(sum)
```
### Exemplos usando ES6
```js
const numbers = [item,item,item,item,item]
const sum = numbers.reduce((accumulator, item)=>(accumulator + item),0)
```
### Exemplo simples com array de números
```js
valores = [10, 20, 30, 40, 50]
console.log(valores.reduce((somatorio, atual) => somatorio + atual, vrInicial))
```

#### Outro
```js
const numeros = [10, 20, 70, 100];

const soma = numeros.reduce((total, atual) => total + atual); 

console.log(soma)
```

#### Outro exemplo

Valor inicial = 0
```js
let numeros = [3, 7, 5, 10];
let total = numeros.reduce((acumulador, numero, indice, original) => 
{
	console.info(`${acumulador} total até o momento`);
	console.log(`${numero } valor atual`);
	console.log(`${indice} indice atual`);
	console.log(`${original} array original`);
	return acumulador += numero;
}, 0)
console.warn('acaboooou');
console.log(total)
```

#### Exemplo de uso com objetos

#### Para ES5 e anteriores
```js
var valores = [
	{valor: 1},
	{valor: 2},
	{valor: 7},
	{valor: 5},
	{valor: 5}
];
var resultado = valores.reduce(function(soma, atual) {
  return soma + atual.valor;
}, 0)

console.log(resultado);
```

#### Com ES6
```js
const valores = [
	{valor: 3},
	{valor: 7},
	{valor: 5},
	{valor: 5}
];
let resultado = valores.reduce(
    (soma, atual) => soma + atual.valor, 0
);

console.log('A soma vale: ' + resultado);
alert('A soma vale: ' + resultado)
```
#### Outro exemplo
```js
console.log('-'.repeat(50))

let loja = [
  {
    product: 'Celular',
    qty: 1,
    price: 500,
  },
  {
    product: 'Mouse',
    qty: 1,
    price: 10,
  },
  {
    product: 'Pendrive',
    qty: 2,
    price: 20,
  },
];

let total = loja.reduce(
	(acumulado, atual) => acumulado + atual.price, 0
);

console.log(total)
```
#### Outro exemplo com ES6
```js
let person =[
    {name:"Karen", age:20, hobby:"dancing"},
    {name:"John Doe", age:30, hobby:"riding"},
    {name:"Nikita", age:10, hobby:"drawing"},
    {name:"Jane", age:20, hobby:"swimming"},
    {name:"Benn", age:20, hobby:"travelling"},
]
const sum = person.reduce((accumulator, arrayItem) => {
   return accumulator + arrayItem.age
},0)
console.log(sum)//Result: 100

let pessoa =[
	{nome:"João", idade:20, peso:60},
	{nome:"Pedro", idade:30, peso:70},
	{nome:"Raimundo", idade:10, peso:30},
	{nome:"Francisco", idade:20, peso:80},
	{nome:"Benn", idade:20, peso:60},
]
const somaIdades = pessoa.reduce((acumulador, atual) => {
   return acumulador + atual.idade
},0)

console.log('Soma das idades: '+somaIdades)//Result: 100

console.log('-'.repeat(50))
const somaPesos = pessoa.reduce((acumulador, atual) => {
   return acumulador + atual.peso
},0)

console.log('Soma dos pesos: '+somaPesos)
```

### Exemplo de uso do reduce com strings
```js
console.log('-'.repeat(50))

var autores = ["Miguel", "João", "Pedro", "Manoel", "Ribamar"]
var resultado = autores.reduce( (anterior, atual) => anterior +', '+ atual )

console.log(resultado)
```
#### Outro exemplo 
```js
const strings = ['cem', 'duzentos', 'oitocentos'];
const numberString = strings.reduce((acc, curr) => {
  return acc + ', ' + curr;
});

console.log(numberString); // "cem, duzentos, oitocentos"

console.log(typeof myString);
```

### Referências

[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380](https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380)

[https://www.w3schools.com/jsref/jsref_reduce.asp](https://www.w3schools.com/jsref/jsref_reduce.asp)

[https://www.youtube.com/watch?v=8qHcG-YAkxI](https://www.youtube.com/watch?v=8qHcG-YAkxI)



