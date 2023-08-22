/* Geral
1. Defina o que é uma variável na programação.
2. Escreva com as suas palavras a diferença entre as declarações const, let e var e como elas podem
ser aplicadas na prática.
3. Explique a diferença entre as variáveis do tipo objeto e lista.


1) Uma variável serve para armazenar dados

2)const- declara uma variável com valor que não pode ser atribuído após a inicialização 
  let - declara uma variável que pode ser retribuída com um novo valor 
  var- uma variável cujo valor será comparado com várias condições

3) Objeto e achar valor 
Lista é numerada*/

/*String
Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. Em seguida, exiba o
conteúdo da variável "nome" no terminal.
 */
const nome = "Daniele"
console.log(nome)

/*Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba o
comprimento da string armazenada na variável "frase".*/
const frase01 = "Tecnologia"
console.log(frase01.length)

/*Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, exiba a
primeira letra da palavra armazenada na variável "palavra".*/
const palavra = "Softex"
console.log(palavra.charAt(0))

/*Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba a
frase em letras maiusculas.*/
const frase02 = "Computador"
console.log(frase02.toUpperCase())

/*Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. Em seguida,
sobrescreva o valor da variável para um outro endereço e verifique no terminal o valor atual da
variável.*/

let endereco = "rua 88"
console.log(endereco)

endereco = "rua 89"
console.log(endereco)


//Integer e float

// Declare uma constante chamada" PI" e atribua a ela o valor de 3.14159.

const PI = 3.14159
console.log(PI)

// Declare uma nova variável chamada "y" e atribua a ela o valor da constante "PI".

let y = PI
console.log(y)

/* Declare uma constante chamada "taxaJuros" e atribua a ela o valor de 0.05, representando uma
taxa de juros de 5%. */

let taxaJuros = 0.05

let x

x = 10
y = 5

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//boolean

/*(Crie uma variável chamada "estaChovendo" e atribua a ela o valor booleano que indica se está
chovendo ou não.*/

let estaChovendo = true
console.log(estaChovendo)

if (estaChovendo) {
    console.log("ESTÁ CHOVENDO!")
} else {
    console.log("NÃO ESTÁ CHOVENDO!")
}

//Declare uma variável chamada "verdadeiro" e atribua a ela o valor booleano true.
let verdadeiro = true
console.log(verdadeiro)

//Declare uma variável chamada "falso" e atribua a ela o valor booleano false.
let falso = false
console.log(falso)

//Verifique no terminal se a variável "verdadeiro" é igual a variável "falso".

console.log(verdadeiro == falso);

/*Declare uma variável chamada "temperatura" e atribua a ela um valor numérico representando a
temperatura atual. Em seguida, verifique e exiba no terminal se esta temperatura é maior que 30
graus Celsius.*/


let temperatura = 25
console.log(temperatura)

if (temperatura > 30) {
    console.log("A temperatura " + temperatura + "º é maior que 30");
} else {
    console.log("A temperatura " + temperatura + "º é menor que 30");
}


/*Declare uma variável chamada "resultado" e atribua a ela o valor booleano resultante da
comparação "10 > 5". Em seguida, exiba o valor da variável resultado no terminal.*/

let resultado = 10 > 5
console.log(resultado)

/*Declare uma variável chamada "teste" e atribua a ela o valor booleano resultante da comparação
"25 < 15". Em seguida, exiba o valor da variável resultado no terminal.*/

let teste = 25 < 15
console.log(teste)

//Objeto

/*Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua
valores a elas.*/
let pessoa = {
    nome: "Ana",
    idade: 23,
    endereco: "rua 66",
}

console.log(pessoa)

//Acesse o valor da propriedade "nome" do objeto "pessoa".
console.log(pessoa.nome)

//Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela.
pessoa.profissao = "desenvolvedor"
console.log(pessoa.profissao)

//Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor.

pessoa.idade = 20
console.log(pessoa.idade)


/*Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua
valores a elas.*/
let animal = {
    nome: "Rachy",
    especie: "Cachorro",
    cor: "Amarelo",
}

console.log(animal);

/*Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a
elas.*/

let livro = {
    titulo: "Vida",
    autor: "Dayana Barbosa",
    ano: 2002
}
console.log(livro)

//Acesse o valor da propriedade "autor" do objeto livro.
console.log(livro.autor)

//Atualize o valor da propriedade "ano" do objeto livro para um novo valor.
livro.ano = 2020
console.log(livro.ano)

//Exclua a propriedade "titulo" do objeto utilizando o operador "delete".

delete livro.titulo
console.log(livro.titulo)

/*Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores
a elas. Em seguida, exiba todas as propriedades do objeto no console.*/

let carro = {
    marca: "Chevrolet",
    modelo: "Camaro",
    ano: 1967
}
console.log(carro)

/*Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as
propriedades do objeto no console.*/

carro.modelo = undefined
console.log(carro)

//Outros tipos de variáveis

//Declare uma variável chamada "variavelNull" e atribua a ela o valor nulo ("null").
let variavelNull = "null"
console.log(variavelNull)

//Declare uma variável chamada "variavelUndefined" e não atribua nenhum valor a ela.
let variavelUndefined
console.log(variavelUndefined)

//Verifique se a variável "variavelNull" é igual a "null".

console.log(variavelNull == null);

//Verifique se a variável "variavelUndefined" é igual a "undefined".
console.log(variavelUndefined == undefined);

//Atribua o valor "undefined" a uma propriedade chamada "nome" de um objeto vazio.
let objetoVazia = {
    nome: undefined
}
console.log(objetoVazia)

//Array

//Crie um array vazio chamado "numeros".
let numeros = []
console.log(numeros)

//Adicione os números 1, 2, 3 e 4 ao array "numeros".
numeros = [1, 2, 3, 4]
console.log(numeros)

//Acesse o valor do segundo elemento do array "numeros".
console.log(numeros[1])

//Atualize o valor do terceiro elemento do array "numeros" para 10.
numeros[2] = 10
console.log(numeros)

//eRemova o último elemento do array "numeros" utilizando a função ".pop".
numeros.pop()
console.log(numeros)

//Verifique o comprimento do array "numeros".
console.log(numeros.length)

//Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".
let frutas = ["maçã", "banana", "laranja"]
console.log(frutas)

//Acesse o valor do primeiro elemento do array frutas.
console.log(frutas[0])

//Adicione a string "uva" ao final do array frutas utilizando a função ".push".
frutas.push("uva")
console.log(frutas)

/*Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.*/

let objetoAluno = {
    nome: "Dani Souza",
    idade: 25
}

let arrayAluno = []
arrayAluno.push(objetoAluno)

console.log(arrayAluno)

//Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".
console.log(arrayAluno[0].nome)

//Adicione mais três objetos do tipo "aluno" ao array "alunos".
arrayAluno.push({
    nome: "José Silva",
    idade: 21
})

arrayAluno.push({
    nome: "Joana",
    idade: 20
})

arrayAluno.push({
    nome: "Henrique",
    idade: 19
})

console.log(arrayAluno)

/*13Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no
terminal apenas os produtos que ficaram em posições pares.*/
let produtos = [
    "Café",
    "Leite",
    "Arroz",
    "Feijão",
    "Maça",
    "Banana",
    "Carne",
    "Queijo",
    "Pão",
    "Biscoito"
]

for (let i = 0; i < produtos.length; i++) {
    if (i % 2 == 0) {
        console.log(produtos[i])
    }
}

//Typeof

/*Crie uma variável chamada "numero" e atribua a ela um número qualquer. Verifique o tipo de dado
dessa variável usando "typeof".*/

let numero = 55
console.log(typeof numero);

/*Crie uma variável chamada "texto" e atribua a ela uma string qualquer. Verifique o tipo de dado
dessa variável usando "typeof".*/

let texto = "joaquim"
console.log(typeof texto);

/*Crie uma variável chamada "booleano" e atribua a ela um valor booleano ("true" ou "false").
Verifique o tipo de dado dessa variável usando "typeof".*/

let booleano = true
console.log(typeof booleano);

/*Crie uma variável chamada "array" e atribua a ela um array vazio. Verifique o tipo de dado dessa
variável usando "typeof".*/

let array = []
console.log(typeof array)

/*Crie uma variável chamada "objeto" e atribua a ela um objeto vazio. Verifique o tipo de dado dessa
variável usando "typeof".*/

let objeto = {}
console.log(typeof objeto)

/*Crie uma variável chamada "nulo" e atribua a ela o valor nulo ("null"). Verifique o tipo de dado
dessa variável usando typeof.*/

let nulo = null
console.log(typeof nulo)

/*Crie uma variável chamada "indefinido" sem atribuir nenhum valor. Verifique o tipo de dado dessa
variável usando "typeof".*/

let indefinido
console.log(typeof indefinido)

//Operadores lógicos

/*Crie uma estrutura condicional que verifica se dois números são iguais utilizando o operador de
igualdade ("==").*/

let numero1 = 5;
let numero2 = 10;

if (numero1 == numero2) {
    console.log("Os números são iguais.");
} else {
    console.log("Os números são diferentes.");
}

/*Crie uma estrutura condicional que verifica se dois números são diferentes utilizando o operador de
diferença ("!=").*/

if (numero1 != numero2) {
    console.log("Os numeros são diferentes");
} else {
    console.log("Os numeros não são diferentes ")
}

/*Crie uma estrutura condicional que verifica se um número é maior que outro utilizando o operador
de maior que (">").*/

if (numero1 > numero2) {
    console.log("Num1 é maior que numb2");
} else {
    console.log("num1 é menor que num2");
}

/*Crie uma estrutura condicional que verifica se um número é menor que outro utilizando o operador
de menor que ("<").*/

if (numero1 < numero2) {
    console.log("Nume1 é menor que nume2");
} else {
    console.log("nume1 é maior que nume2");
}

/*Crie uma estrutura condicional que verifica se um número é maior ou igual a outro utilizando o
operador de maior ou igual a (">=").*/

if (numero1 >= numero2) {
    console.log("O numer1 é maior ou igual a numer2");
}
else {
    console.log("O numer1 é menor do o numer2");
}

/*Crie uma estrutura condicional que verifica se um número é menor ou igual a outro utilizando o
operador de menor ou igual a ("<=").*/

if (numero1 <= numero2) {
    console.log("O primeiro número é menor ou igual ao segundo número.")
} else {
    console.log("O primeiro número é maior que o segundo número.")
}

/* Crie uma estrutura condicional que verifica se duas condições são verdadeiras utilizando o operador
lógico AND ("&&"). */

if (10 > 20 && 50 <= 10) {
    console.log("A condição é verdadeira")
} else {
    console.log("A condição não é verdadeira")
}

/* Crie uma estrutura condicional que verifica se pelo menos uma das condições é verdadeira
utilizando o operador lógico OR ("||"). */

if (60 >= 30 || 30 < 60) {
    console.log("A condição é verdadeira")
} else {
    console.log("A condição não é verdadeira")
}

//Crie uma estrutura condicional que nega uma condição utilizando o operador lógico NOT ("!").

if (!(40 > 20)) {
    console.log("A condição negada é verdadeira")
} else {
    console.log("A condição negada não é verdadeira")
}

/* Crie uma estrutura condicional que verifica se um número está dentro de um determinado
intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<="). */

let nmr = 45

if (nmr >= 25 && nmr <= 96) {
    console.log("O número é maior ou igual a 25 e menor ou igual a 96")
} else {
    console.log("O número não é maior ou igual a 25 e não é menor ou igual a 96")
}

/* Crie uma estrutura condicional que verifica se um número está fora de um determinado intervalo,
utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">"). */

let nmr2 = 12

if (nmr2 > 20 || nmr2 < 5) {
    console.log("O número está fora do intervalo")
} else {
    console.log("O numero está dentro do intervalo")
}

/* Crie uma estrutura condicional que verifica se um número é positivo, utilizando o operador de
maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero. */

let nmr3 = 30

if (nmr3 >= 0) {
    console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}

/* Crie uma estrutura condicional que verifica se uma string é vazia, utilizando o operador de
igualdade ("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a
zero. */

let str = "Teste"

if (str == "" && str.length == 0) {
    console.log("A string é vázia")
} else {
    console.log("A string não é vázia")
}

/* Crie uma estrutura condicional que verifica se uma variável é do tipo booleano, utilizando o
operador "typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a
"boolean" */

let value = false

if (typeof value == "boolean") {
    console.log("É um boolean")
} else {
    console.log("Não é um boolean")
}

