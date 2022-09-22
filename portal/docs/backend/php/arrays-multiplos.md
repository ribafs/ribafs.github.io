## Brincando com arrays múltiplos em PHP

Quer ver algo que me enrolava todo? Arrays múltiplos!

Como faço paga pegar alguns dos seus elementos de um array múltiplo?

### Exemplo para  diversão e aprendizado:

```php
Array ( [joao] => Array ( [nota-provas] => Array ( [0] => 4 [1] => 5 [2] => 6 ) [nota-final] => 5 ) [maria] => Array ( [nota-provas] => Array ( [0] => 7 [1] => 5 [2] => 6 ) [nota-final] => 6 ) [omar] => Array ( [nota-provas] => Array ( [0] => 4 [1] => 5 [2] => 3 ) [nota-final] => 4 ) )
```

Exemplificando preciso pegar o valor de:

- nota final do joao
- notas das provas da maria

### Como faço isso?

Precisamos fazer a moda do Jack Estripador, vamos por partes.

Veja que temos a palavra chave array 3 vezes, portando temos o array externo com dois arrays internos. Este array pode ser escrito de forma a torná-lo mais comprensível assim:

### Deixando mais legível

```php
$notas = array(
    'joao' => array(
        'nota-provas' => array(4, 5, 6),
        'nota-final' => 5
    ),
    'maria' => array(
        'nota-provas' => array(7, 5, 6),
        'nota-final' => 6
    ),
    'omar' => array(
        'nota-provas' => array(4, 5, 3),
        'nota-final' => 4
    )
);
```
Depois disso fica mais simples pegar as partes. Precisamos usar uma fun ção de debug como a var_dump() ou a print_r()
```php
Capturar o array completo:
print_r($notas);

Capturar a nota-final do joao
print_r($notas['joao']['nota-final']);

Pegar as nota-provas da maria
print_r($notas['maria']['nota-provas']);

Nota da segunda prova da maria
print_r($notas['maria']['nota-provas'][1]);

```

### Escrevendo o array sem a palavra chave array

Esta sintaxe é aceita somente nas versões 7 e superior (se tiver umam informação mais precisa, favor comentar)

```php
$notas = [
    'joao' => [
        'nota-provas' => [4, 5, 6],
        'nota-final' => 5
    ],
    'maria' => [
        'nota-provas' => [7, 5, 6],
        'nota-final' => 6
    ],
    'omar' => [
        'nota-provas' => [4, 5, 3],
        'nota-final' => 4
    ]
];
```

Veja que para isso trocamos "array(" por "[" e ")" por "]".

Caso tenha alguma observação a fazer ou uma sugestão  para deixar mais claro, por favor clique acima em Comentários e compartilhe conosco.
Gratidão.

