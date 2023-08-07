/*Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a
zero.*/

let numInt = parseInt (prompt("Digite um número inteiro: "))

if (numInt > 0) {
    alert(`POSITIVO`)
} else if (numInt < 0) {
    alert (`NEGATIVO`)
}else {
    alert(`IGUAL A ZERO`)
}

/*Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de
idade.*/

let idade = prompt("Digite sua idade: ")

if (idade > 18) {
    alert(`MAIOR DE IDADE`)
} else if(idade < 18) {
    alert(`MENOR DE IDADE`)
}

/*Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
iguais.*/

let num1 = parseInt (prompt("Digite o primeiro número"))
let num2 = parseInt (prompt("Digite o segundo  número"))

if (num1 > num2) {
    alert(`${num1} é Maior que  ${num2}`)
} else if(num2 > num1) {
    alert(`${num2} é Maior que ${num1} `)
}else{
    alert(`São iguais`)
}

//Faça um programa que verifique se um número é par ou ímpar.

const numero = parseInt (prompt("Digite um número:"))
const  result = numero % 2

if (result == 0 ) {
    alert(`O numero ${numero} é par`)
} else {
    alert(`O numero ${numero} é impar`)
}

/*Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado.*/

let numero1 = parseFloat (prompt("Digite a primeira nota:"))
let numero2 = parseFloat (prompt("Digite a segunda nota:"))
let numero3 = parseFloat (prompt("Digite a terceira nota:"))

let media = (num1 + num2 + num3) / 3

if (media >=7) {
    alert(`APROVADO`)
} else if(media < 7 ) {
    alert(` REPROVADO`)
}

/*Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome.*/

let nome1 = (prompt("Digite um nome"))
let nome2 = (prompt("Digite outro nome"))

/*Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome.*/

if (nome1.length > nome2.length) {
    alert(`O nome ${nome1} possui o maior número de caracteres`)
} else  {
    alert(`O nome ${nome2} possui o maiort número de caracteres`)
}
//Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

var caractere = prompt("Digite um caractere:").toLowerCase();


if (caractere.match(/[a-z]/i)) {
    
    if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
        console.log("O caractere é uma vogal.");
    } else {
        console.log("O caractere é uma consoante.");
    }
} else {
    console.log("O caractere não é uma letra do alfabeto.");
}
