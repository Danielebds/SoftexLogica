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