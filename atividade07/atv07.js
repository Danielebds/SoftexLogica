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

/*Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
utilizando o while.*/

let soma = 0;
let numero = parseInt(prompt('Digite um número inteiro: '));

while (numero !== 0) {
    let digito = numero % 10;
    soma += Math.pow(digito, 3);
    numero = Math.floor(numero / 10);
}

;
//Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.*/

let numero = 1;

while (numero <= 100) {
    console.log(numero);
    numero += 2;
}

/*Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o
while.*/


let numero = 1;

while (numero <= 50) {
    if (numero % 3 === 0) {
        console.log(numero);
    }
    numero++;
}

/*Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
ou igual a 7) utilizando o while.*/

let contador = 0;
let alunosAprovados = 0;

while (contador < 5) {
    const nota = parseFloat(prompt(`Digite a nota do aluno ${contador + 1}:`));

    if (nota >= 7) {
        alunosAprovados++;
    }

    contador++;
}

console.log(`Número de alunos aprovados: ${alunosAprovados}`);

/*Elabore um programa que leia uma sequência de números inteiros do usuário e determine
quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar
de ler quando o usuário digitar o número 0 utilizando o while.*/

let numero;
let paresAntesDeImpar = 0;
let encontrouImpar = false;

while (true) {
    numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0 && !encontrouImpar) {
        paresAntesDeImpar++;
    } else if (numero % 2 === 1) {
        encontrouImpar = true;
    }
}

console.log(`Foram digitados ${paresAntesDeImpar} números pares antes do primeiro número ímpar.`);

/*Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos
números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando
o usuário digitar o número 0 utilizando o while.*/

let numero;
let pares = 0;
let impares = 0;

while (true) {
    numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Foram digitados ${pares} números pares e ${impares} números ímpares.`);

/*Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/

let numero;
let divisiveisPor2 = 0;
let divisiveisPor3 = 0;
let divisiveisPor5 = 0;

while (true) {
    numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        divisiveisPor2++;
    }

    if (numero % 3 === 0) {
        divisiveisPor3++;
    }

    if (numero % 5 === 0) {
        divisiveisPor5++;
    }
}

console.log(`Quantidade de números divisíveis por 2: ${divisiveisPor2}`);
console.log(`Quantidade de números divisíveis por 3: ${divisiveisPor3}`);
console.log(`Quantidade de números divisíveis por 5: ${divisiveisPor5}`);

/*Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
utilizando o while.*/

let numero;
let somaDivisiveisPor = 0;
let quantidadeDivisiveisPor = 0;

while (true) {
    numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

    if (numero === 0) {
        break;
    }

    if (numero % 3 === 0) {
        somaDivisiveisPor += numero;
        quantidadeDivisiveisPor++;
    }
}

if (quantidadeDivisiveisPor > 0) {
    const mediaDivisiveisPor = somaDivisiveisPor / quantidadeDivisiveisPor;
    console.log(`A média dos números divisíveis por 3 é: ${mediaDivisiveisPor}`);
} else {
    console.log('Nenhum número divisível por 3 foi digitado.');


    /*Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
     números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
    número 0 utilizando o while.*/

    let numero;
    let numerosComMaisDeTresDigitos = 0;

    while (true) {
        numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

        if (numero === 0) {
            break;
        }

        if (Math.abs(numero) > 999) {
            numerosComMaisDeTresDigitos++;
        }
    }

    console.log(`Quantidade de números com mais de três dígitos: ${numerosComMaisDeTresDigitos}`);

    /*Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
    dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o
    número 0 utilizando o while.*/

    let numero;
    let soma = 0;
    let quantidade = 0;

    while (true) {
        numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

        if (numero === 0) {
            break;
        }

        if (numero >= 50 && numero <= 100) {
            soma += numero;
            quantidade++;
        }
    }

    if (quantidade > 0) {
        const media = soma / quantidade;
        console.log(`A média dos números entre 50 e 100 é: ${media}`);
    } else {
        console.log('Nenhum número entre 50 e 100 não foi digitado.');
    }


    /*Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
    valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
    número 0 utilizando o while.*/

    let numero;
    let menorImparPositivo = Infinity;

    while (true) {
        numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

        if (numero === 0) {
            break;
        }

        if (numero > 0 && numero % 2 === 1 && numero < menorImparPositivo) {
            menorImparPositivo = numero;
        }
    }

    if (menorImparPositivo !== Infinity) {
        console.log(`O menor valor positivo e ímpar digitado foi: ${menorImparPositivo}`);
    } else {
        console.log('Nenhum número positivo e ímpar foi digitado.');
    }


    /*Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
   números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
   O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/

    let primeiroNumero;
    let ultimoNumero;
    let pares = 0;
    let impares = 0;

    while (true) {
        const numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

        if (numero === 0) {
            break;
        }

        if (primeiroNumero === undefined) {
            primeiroNumero = numero;
        }

        ultimoNumero = numero;

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Quantidade de números pares entre ${primeiroNumero} e ${ultimoNumero}: ${pares}`);
    console.log(`Quantidade de números ímpares entre ${primeiroNumero} e ${ultimoNumero}: ${impares}`);
