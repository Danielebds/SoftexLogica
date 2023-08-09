//01 - Descreva para que serve o comando "for".

//R-  um comando que executa um comando de códigos varias vezes

//02 - Como o comando "for" define o início de uma repetição?

// R - As repetições são feitas de acordo com uma condição.

//03 - Como o comando "for" determina o fim da execução?

//R- Enquanto esta condição for verdadeira, a instrução é repetida. Caso não, a repetição é interrompida.

//04 - Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?

//R - É como contar de um número para outro, fazendo algo em cada passo, até que você chegue ao número final



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

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma dos números de 1 a 100 é:", soma);



//Desenvolva um programa que exiba todos os números pares de 1 a 50.

for (let index = 0; index < 50; index = index + 2) {
    console.log(index);

}



//Faça um programa que calcule o produto dos números de 1 a 5.

let calcule = 0
for (let index = 1; index <= 5; index++) {
    calcule += index;
}
console.log(`O calculo dos produtos é ${calcule}`);

//Crie um programa que exiba a tabuada do 7.

const numero = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);

}

//Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

let calcule = 0;

for (let index = 0; index < 5; index++) {
    const media = parseFloat(prompt("Digite a sua nota: "));

    calcule = media + calcule;

}
const mediaFinal = calcule / 5;
console.log(`A media de 5 notas é ${mediaFinal}`);

//Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.

for (let index = 1; index <= 50; index++) {
}
if (index % 3 === 0) {

    console.log(`Os múltiplos de 3 são ${index}`);
}



//Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.

let maiorValor = 0;
let menorValor = Infinity;

for (let index = 1; index <= 10; index++) {
    const numero = parseFloat(prompt("Digite um número: "))

    if (numero > maiorValor) {
        maiorValor = numero;
    }
    if (numero < menorValor) {
        menorValor = numero;
    }

}
console.log(`O maior valor digitado é: ${maiorValor}`);
console.log(`O menor valor digitado é: ${menorValor}`);

//um programa que exiba os números ímpares de 1 a 100.


for (let index = 2; index < 100; index = index + 2) {
    console.log(index - 1);

}

/*Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
ou igual a 7).*/

let notas = 0;
let aprovados = 0;
let reprovados = 0;

for (let index = 0; index < 5; index++) {
    const media = parseFloat(prompt("Digite a sua nota: "));
    notas += media; // Corrigido para somar as notas corretamente

    if (media >= 7) {
        aprovados++;
    } else {
        reprovados++;
    }
}

const mediaFinal = notas / 5;

console.log(`Os número de Aprovados é: ${aprovados}`);
console.log(`Os número de Reprovados é: ${reprovados}`);

//Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

let digitos = parseInt(prompt("Digite um numero inteiro"))

let digitosString = digitos.toString().trim()

let somaDigitos = 0

for (let index = 0; index < digitosString.length; index++) {
    somaDigitos += parseInt(digitosString.charAt(index))
}

alert(somaDigitos)


//Elabore um programa que leia um número inteiro e exiba todos os seus divisores.

const numeroInt = parseInt(prompt("Digite um número inteiro"))

for (let index = 1; index <= numeroInt; index++) {
    if (numeroInt % index === 0) {
        console.log(`Divisor de ${numeroInt}: ${index}`);
    }
}

//Desenvolva um programa que calcule a média de altura de 5 pessoas.

let altura = 0;
for (let index = 0; index < 5; index++) {
    let mediaDealtura = parseFloat(prompt("Digite sua altura: "));

    altura = mediaDealtura + altura

}

const result = altura / 5
console.log(`A média das alturas é ${result.toFixed(2)}m`)



/*Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra
"Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
utilize a palavra "FizzBuzz".*/


for (let index = 1; index <= 100; index++) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
        console.log(`${index}: FizzBuzz`);
    } else if (index % 3 === 0) {
        console.log(`${index}: Fizz`);
    } else if (index % 5 === 0) {
        console.log(`${index}: Buzz`);
    }
}


//Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

let digitos = parseInt(prompt("Digite um numero inteiro"))

let digitosString = digitos.toString().trim()

let somaDigitosPares = 0

for (let index = 0; index < digitosString.length; index++) {
    let digito = parseInt(digitosString.charAt(index))

    if (digito % 2 === 0) {
        somaDigitosPares += digito
    }
}

alert(somaDigitosPares)


/*Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
número lido for 123, o programa deve exibir 321.*/

let digitos = parseInt(prompt("Digite um numero inteiro"))

let digitosString = digitos.toString().trim()

let textoInvertido = ''

for (let index = digitosString.length - 1; index >= 0; index--) {
    textoInvertido += digitosString.charAt(index)
}

alert(textoInvertido)