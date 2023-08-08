//01 - Descreva para que serve o comando "for".

//R-  um comando que executa um comando de códigos varias vezes

//02 - Como o comando "for" define o início de uma repetição?

// R - As repetições são feitas de acordo com uma condição.

//03 - Como o comando "for" determina o fim da execução?

//R- Enquanto esta condição for verdadeira, a instrução é repetida. Caso não, a repetição é interrompida.

//04 - Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?

//R -


//Implemente o código do slide de número 18.

for (let i = 0; i < 10; i++) {
    console.log("Testando uma frase!")

}

//Implemente o código do slide de número 26.

for (let i = 0; i < 10; i++) {
    console.log(i);

}

//Implemente o código do slide de número 36.

for (let i = 0; i < 10; i++) {

    if (i == 5) {
        break;
    }

    console.log(i);
}

//Implemente o código do slide de número 38.

for (let i = 0; i < 10; i++) {

    if (i == 5) {

        continue;
    }
    console.log(i);
}

//Implemente o código do slide de número 44.

let nomes = [
    'joão',
    'Paulo',
    'Pedro',
    'Gustavo',
    'Maria'
]



for (let n of nomes) {
    console.log(n);
}

//Faça um programa que exiba os números de 1 a 10 em ordem crescente.

for (let index = 1; index <= 10; index++) {
    console.log(index);

}

//Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
for (let index = 10; index > 0; index--) {
    console.log(index);

}


//Elabore um programa que calcule a soma dos números de 1 a 100.

for (let index = 1; index <= 100; index++) {
    console.log(index);

}

//Desenvolva um programa que exiba todos os números pares de 1 a 50.

for (let index = 0; index < 50; index = index + 2) {
    console.log(index);

}