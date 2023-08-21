//Implemente o código do slide de número 6.

console.log('Estudar é muito bom');
console.log('Paciência e persistÊncia');
console.log('Revisão é a mãe do aprendizado');

console.log('Estudar é muito bom');
console.log('Paciência e persistÊncia');
console.log('Revisão é a mãe do aprendizado');

console.log('Estudar é muito bom');
console.log('Paciência e persistÊncia');
console.log('Revisão é a mãe do aprendizado');

//Implemente o código do slide de número 15.

function criarFrases() {
    console.log('Estudar é muito bom');
    console.log('Paciência e persistÊncia');
    console.log('Revisão é a mãe do aprendizado');

}

criarFrases()
criarFrases()
criarFrases()

//Implemente o código do slide de número 24.
function soma(num1, num2) {
    console.log(num1 + num2);
}

soma(10, 15)
soma(10, 20)
soma(30, 50)
soma(50, 50)

//Implemente o código do slide de número 33.

function soma(num1, num2) {
    return num1 + num2
}

teste1 = soma(10, 15)
console.log(teste1)

teste2 = soma(10, 20) + soma(30, 50)
console.log(teste2);

console.log(soma(50, 50));

//Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.

function soma(a, b) {
    return a + b
}

const result = soma(10, 20)
console.log(result);


/* 
Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
se o número for par ou "false" caso contrário.*/

function isPar(numero) {
    return numero % 2 === 0;
}


console.log(isPar(4)); // Exibe true, pois 4 é par
console.log(isPar(7)); // Exibe false, pois 7 não é par

/*
Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média
aritmética delas.*/

function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Exemplo de uso da função:
const resultado = media(7, 8, 9); // Isso retornará a média (7 + 8 + 9) / 3 = 8
console.log(resultado); // Exibe 8 no console

/*
Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
pessoa e retorne o índice de massa corporal (IMC) dela.*/

function imc(peso, altura) {
    return peso / (altura * altura);
}


const peso = 70;
const altura = 1.75;
const resultado = imc(peso, altura);
console.log(`O IMC é: ${resultado}`);

/*
Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.*/

function calcularDesconto(valor, percentualDesconto) {
    const desconto = valor * (percentualDesconto / 100);
    const valorComDesconto = valor - desconto;
    return valorComDesconto;
}

// Exemplo de uso da função:
const valorProduto = 100; // Valor do produto em reais
const descontoPercentual = 10; // Percentual de desconto
const valorComDesconto = calcularDesconto(valorProduto, descontoPercentual);
console.log(`O valor com desconto é: R$ ${valorComDesconto.toFixed(2)}`);



/*
Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
faixas de renda:
a. Até R$ 1.903,98: isento
b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
e. Acima de R$ 4.664,68: alíquota de 27,5%  */


function calcularImpostoRenda(salarioBruto) {
    let impostoAPagar;

    if (salarioBruto <= 1903.98) {
        impostoAPagar = 0;
    } else if (salarioBruto <= 2826.65) {
        impostoAPagar = salarioBruto * 0.075;
    } else if (salarioBruto <= 3751.05) {
        impostoAPagar = salarioBruto * 0.15;
    } else if (salarioBruto <= 4664.68) {
        impostoAPagar = salarioBruto * 0.225;
    } else {
        impostoAPagar = salarioBruto * 0.275;
    }

    return impostoAPagar;
}


const salario = 3000;
const impostoAPagar = calcularImpostoRenda(salario);
console.log(`O imposto de renda a pagar é: R$ ${impostoAPagar.toFixed(2)}`);



/*
Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
próximo.*/

function calcularMediaArredondada(listaNumeros) {
    const soma = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / listaNumeros.length;
    return Math.round(media);
}

// Exemplo de uso da função:
const numeros = [5, 7, 8, 9, 10];
const mediaArredondada = calcularMediaArredondada(numeros);
console.log(`A média arredondada é: ${mediaArredondada}`);

/*
Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
presentes nesse número.*/

function contarDigitosParesImpares(numero) {
    let numeroStr = numero.toString();
    let digitosPares = 0;
    let digitosImpares = 0;

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i]);
        if (digito % 2 === 0) {
            digitosPares++;
        } else {
            digitosImpares++;
        }
    }

    return { digitosPares, digitosImpares };
}

// Exemplo de uso da função:
const numero = 1234567;
const resultado = contarDigitosParesImpares(numero);
console.log(`Quantidade de dígitos pares: ${resultado.digitosPares}`);
console.log(`Quantidade de dígitos ímpares: ${resultado.digitosImpares}`);

/*
Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e

retornar a média das notas de todos os alunos.*/



function calcularMediaAlunos(listaAlunos) {
    if (listaAlunos.length === 0) {
        return 0;
    }

    let somaNotas = 0;

    for (let i = 0; i < listaAlunos.length; i++) {
        somaNotas += listaAlunos[i].nota;
    }

    const media = somaNotas / listaAlunos.length;
    return media;
}

// Exemplo de uso da função:
const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bob', nota: 9 },
    { nome: 'Carol', nota: 7 },
];

const mediaTurma = calcularMediaAlunos(alunos);
console.log(`A média das notas dos alunos é: ${mediaTurma.toFixed(2)}`);

/*Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
parâmetro e retorne a idade atual.*/

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}


const anoNascimento = 1999;
const idade = calcularIdade(anoNascimento);
console.log(`A idade atual é: ${idade} anos`);


/*
Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
tabuada desse número de 1 a 10 no console.*/

function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}


const numero = 5;
gerarTabuada(numero);



/*
Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
utilizadas.*/

function advinheNumero() {
    const numeroCorreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    while (true) {
        const tentativa = parseInt(prompt('Tente adivinhar o número (entre 1 e 100):'));
        tentativas++;

        if (tentativa === numeroCorreto) {
            console.log(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativas.`);
            break;
        } else if (tentativa < numeroCorreto) {
            console.log('Tente um número maior.');
        } else {
            console.log('Tente um número menor.');
        }
    }
}

// Chamar a função para iniciar o jogo:
advinheNumero();

/*
 Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
false caso contrário.*/

function verificarPropriedade(objeto, propriedade) {
    return propriedade in objeto;
}

const pessoa = { nome: 'Daniele', idade: 24 };
const propriedadeExiste = verificarPropriedade(pessoa, 'nome');
console.log(propriedadeExiste);


/*
Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
"margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
custo acrescido da margem de lucro e do valor do frete.*/

function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    const margemDecimal = margemLucro / 100;
    const precoVenda = valorCusto * (1 + margemDecimal) + valorFrete;
    return precoVenda;
}


const custo = 100;
const margem = 30;
const frete = 10;

const precoVenda = calcularPrecoProduto(custo, margem, frete);
console.log(`O preço de venda do produto é: R$ ${precoVenda.toFixed(2)}`);


/*Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
'Desenvolvimento'.*/

function encontrarPalavraMaisLonga(frase) {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }

    return palavraMaisLonga;
}

const fraseExemplo = 'Tutorial de desenvolvimento da web';
const palavraMaisLonga = encontrarPalavraMaisLonga(fraseExemplo);
console.log(`A palavra mais longa é: ${palavraMaisLonga}`);

/*
Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
*********
* Hello *
* World *
* in *
* a *
* frame *
********** */

function imprimirQuadroRetangular(listaStrings) {
    const maiorComprimento = Math.max(...listaStrings.map(str => str.length));
    const linhaSuperior = '*'.repeat(maiorComprimento + 4);

    console.log(linhaSuperior);

    for (const str of listaStrings) {
        const espacos = ' '.repeat(maiorComprimento - str.length);
        console.log(`* ${str}${espacos} *`);
    }

    console.log(linhaSuperior);
}


const lista = ["Hello", "World", "in", "a", "frame"];
imprimirQuadroRetangular(lista);


/*Crie uma função que receba um array de strings e retorne um novo array contendo apenas as
strings que têm mais de 5 caracteres.*/

function filtrarStringsLongas(arrayStrings) {
    const stringsLongas = arrayStrings.filter(str => str.length > 5);
    return stringsLongas;
}


const arrayOriginal = ["apple", "banana", "orange", "grape", "strawberry", "blueberry"];
const stringsFiltradas = filtrarStringsLongas(arrayOriginal);
console.log(stringsFiltradas);

/*
Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
etc.) e retorne um novo array apenas com os livros escritos por determinado autor.*/

function livrosDoAutor(arrayDeLivros, autorDesejado) {
    const livrosDoAutor = arrayDeLivros.filter(livro => livro.autor === autorDesejado);
    return livrosDoAutor;
}


const biblioteca = [
    { titulo: "Livro A", autor: "Autor 1", ano: 2000 },
    { titulo: "Livro B", autor: "Autor 2", ano: 2010 },
    { titulo: "Livro C", autor: "Autor 1", ano: 2015 },
    { titulo: "Livro D", autor: "Autor 3", ano: 2022 },
];

const autorDesejado = "Autor 1";
const livrosDoAutorDesejado = livrosDoAutor(biblioteca, autorDesejado);

console.log(livrosDoAutorDesejado);

/*
Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e
retorne o nome da pessoa mais velha.*/

function pessoaMaisVelha(pessoas) {
    if (pessoas.length === 0) {
        return null;
    }

    let pessoaMaisVelha = pessoas[0];

    for (let i = 1; i < pessoas.length; i++) {
        if (pessoas[i].idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoas[i];
        }
    }

    return pessoaMaisVelha.nome;
}


const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Eva', idade: 40 }
];

const nomeMaisVelho = pessoaMaisVelha(pessoas);
console.log(`A pessoa mais velha é: ${nomeMaisVelho}`);


/*
Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano*/


function carrosFabricadosAposAno(carros, anoFabricacao) {
    const carrosFiltrados = carros.filter(carro => carro.ano > anoFabricacao);
    return carrosFiltrados;
}


const carros = [
    { marca: 'Toyota', modelo: 'Corolla', ano: 2020 },
    { marca: 'Honda', modelo: 'Civic', ano: 2018 },
    { marca: 'Ford', modelo: 'Focus', ano: 2022 },

];

const carrosAposAno = carrosFabricadosAposAno(carros, 2019);
console.log(carrosAposAno);

/*
Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".*/

function inverterString(str) {
    return str.split('').reverse().join('');
}


const entrada = "hello";
const stringInvertida = inverterString(entrada);
console.log(stringInvertida);
