/*01-Enumere as diferenças entre os comandos "for" e "while".
R - (For ) Usado quando o número de repetições é conhecido
R - (While) Usado quando o número de iterações não é conhecido*/

/*02-Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
 R - (For ) Usado para repetições com contagem conhecida.
 R - (While) Utilizado para repetições baseadas em condições de término complexas ou variáveis.*/

//Implemente o código do slide de número 9.

let i = 0;
while (i < 10) {
    console.log("testando uma frase!")
    i++;
}

//Implemente o código do slide de número 16.

let i = 465484133;
while (i > 10) {
    console.log(i);

    i /= 35;
}

//Implemente o código do slide de número 26.

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.

let num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}

//Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.

let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}

//Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.

let numero = 1;
let soma = 0;

while (numero <= 100) {
    soma += numero;
    numero++;


}
console.log('A soma dos números de 1 a 100 é:', soma);



//Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.

let num = 1;
let soma = 0;

while (num <= 5) {
    soma += num;
    num++;


}
console.log('A soma dos números de 1 a 5 é: ', soma);

//Crie um programa que exiba a tabuada do 9 utilizando o while.
let tabuada = 1;

while (tabuada <= 10) {
    let resultado = 9 * tabuada;
    console.log(`9 x ${tabuada} = ${resultado}`);
    tabuada++;
}

/*Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
utilizando o while.*/

let maiorValor = 0;
let menorValor = Infinity;

while (true) {
    const numero = parseInt(prompt('Digite um número inteiro (ou 0 para sair):'));

    if (numero === 0) {
        break;
    }

    if (numero > maiorValor) {
        maiorValor = numero;
    }

    if (numero < menorValor) {
        menorValor = numero;
    }
}

console.log(`O maior valor digitado foi: ${maiorValor}`);
console.log(`O menor valor digitado foi: ${menorValor}`);


/*Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
o while.*/

let numero;
let soma = 0;
let quantidade = 0;

while (true) {
  numero = parseInt(prompt("Digite um número (-1 para parar):"));

  if (numero === -1) {
    break;
  }

  soma += numero;
  quantidade++;
}

if (quantidade > 0) {
  const media = soma / quantidade;
  console.log(`A média dos números digitados é: ${media}`);
} else {
  console.log("Nenhum número foi digitado.");
}
