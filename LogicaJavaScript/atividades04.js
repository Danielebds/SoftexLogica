//01-Implemente o código do slide de número 5.

let frase = prompt("Entrer a primeira frase");
console.log(frase);

//02-Implemente o código do slide de número 13.

let string = "123"
console.log(typeof Number (string));

let number = 321
console.log(typeof String (number));

//Implemente o código do slide de número 16.

let numero1 = prompt("Digite o Primeiro número");
let numero2 = prompt("Digite o Segundo número");

let result = Number(numero1) + Number(numero2);
console.log(result);

//Implemente o código do slide de número 23.

string = " Estudar "
string = " é bom! "
console.log(string1 + string2);

numero1 = 48
console.log(string1 + string2 + " " + numero3);

//Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
let nome = prompt(" Digite seu nome ");
console.log (`Bem vindo: ${nome}`);

/*Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
inteiro.*/

let idade = prompt ("Digite sua idade");
let idadeInt = parseInt (idade)


if (!isNaN (idadeInt)) {
    console.log("Sua idade é:", idadeInt);
} else {
    console.log("idade invalida")
}

//Receba um número inteiro do usuário e converta-o em um número decimal (float).

let numInt = prompt("Digite um número inteiro");
let numDeci = parseInt(numInt).toFixed(2)


if (!isNaN (numDeci)) {
    console.log("Seu número Decimal:", numDeci);
} else {
    console.log("número invalido")
}

//Peça ao usuário para digitar dois números inteiros e exiba a soma deles.

let num1 =prompt ("Digite um número Inteiro");
let num2 =prompt("Digite o segundo número Inteiro");

let resultado = Number (numero1) + Number (numero2);

alert(resultado)

//Receba um número decimal do usuário e calcule o seu quadrado.

let NumDeci = parseFloat (prompt("Digite um número Decimal:"));

const quadrado = NumDeci * NumDeci;

alert(`O quadrado de ${NumDeci} é ${quadrado}`);

//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.


let nascimento = prompt("Digite seu ano de Nascimento: ")
let anoAtual = new Date().getFullYear();
const idade = anoAtual - parseInt(nascimento)

alert(`Sua idade é ${nascimento} - ${anoAtual} = - ${idade}`);

/*Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
concatene-os em uma única string e exiba o nome completo.*/

const nome = prompt("Digite seu Nome: ")
const sobrenome = prompt("Digite seu Sobrenome: ")

alert (`-- ${nome} ${sobrenome}`);

/*Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
foram digitados.*/


let sequencia = prompt("Digite uma sequência de números separados por espaço:");


let num = sequencia.split(" ");
console.log(num)


let quantNum = num.length;


alert(`Foram digitados ${quantNum} Números.`);


/*Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual
animal foi digitado.*/

let animal = prompt("Digite o nome de um animal: ");

alert(`Você digitou o animal: ${animal}`);

/*Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
invertido (sobrenome, nome).*/


let nome = prompt("Digite seu Nome: ")
let sobrenome = prompt ("Digite seu Sobrenome")


alert(`-- ${sobrenome} ${nome} -- `)

//Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres)

const string = prompt("Digite uma palavra: ")

alert(`-- A quantidade de Caractes é ${string.length} --`)

//Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.

let numeroInt =parseInt (prompt("Digite um numero Inteiro: "));

if (Number(numeroInt) % 2 == 0) {
   alert(`Seu numero ${numeroInt} é par`)
} else {
    alert(`Seu numero ${numeroInt} é ímpar`)
}

//Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.

const numeroInteiro = parseInt (prompt("Digite um número inteiro: "));

if (Number(numeroInteiro) >= 0) {
    
    alert(`Seu número ${numeroInteiro} é Positivo`)
} else  {
    alert(`Seu número ${numeroInteiro} é  Negativo`)
}
//Peça ao usuário que insira dois números e exiba o maior deles.


let numero1 = prompt("Digite um número: ")
let numero2 = prompt("Digite um segundo número: ")

if (Number(numero1) > Number(numero2)) {
    alert(`O numero ${numero1} é maior que o número ${numero2}`)
} else if (Number(numero2) > Number(numero1)) {
    alert(`O numero ${numero2} é maior que o número ${numero1}`)
    
} else {
    alert(`Os números são iguais`)

/*Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.*/
let altura = parseFloat(prompt("Digite a sua altura :"));
let peso = parseFloat(prompt("Digite o seu peso :"));


let imc = peso / (altura * altura);

alert(`Seu IMC é: ${imc.toFixed(4)}`);

//Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.


const nome = prompt("Digite seu Nome: ")
const caracteres = nome.length

if (caracteres > 5) {
    alert(`${nome} seu nome tem mais que 5 caracteres`)
} else {
    alert(`${nome} seu nome tem 5 ou menos caracteres`)
}
