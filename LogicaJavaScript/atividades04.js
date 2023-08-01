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

