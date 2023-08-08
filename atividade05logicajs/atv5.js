/*Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a
zero.*/

let numInt = parseInt(prompt("Digite um número inteiro: "))

if (numInt > 0) {
    alert(`POSITIVO`)
} else if (numInt < 0) {
    alert(`NEGATIVO`)
} else {
    alert(`IGUAL A ZERO`)
}



/*Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de
idade.*/

let idade = prompt("Digite sua idade: ")

if (idade > 18) {
    alert(`MAIOR DE IDADE`)
} else if (idade < 18) {
    alert(`MENOR DE IDADE`)
}



/*Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
iguais.*/

let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo  número"))

if (num1 > num2) {
    alert(`${num1} é Maior que  ${num2}`)
} else if (num2 > num1) {
    alert(`${num2} é Maior que ${num1} `)
} else {
    alert(`São iguais`)
}



//Faça um programa que verifique se um número é par ou ímpar.

const numero = parseInt(prompt("Digite um número:"))
const result = numero % 2

if (result == 0) {
    alert(`O numero ${numero} é par`)
} else {
    alert(`O numero ${numero} é impar`)
}



/*Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado.*/

let numero1 = parseFloat(prompt("Digite a primeira nota:"))
let numero2 = parseFloat(prompt("Digite a segunda nota:"))
let numero3 = parseFloat(prompt("Digite a terceira nota:"))

let media = (num1 + num2 + num3) / 3

if (media >= 7) {
    alert(`APROVADO`)
} else if (media < 7) {
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
} else {
    alert(`O nome ${nome2} possui o maiort número de caracteres`)
}



//Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

const caractere = prompt("Digite um caractere ")

if (['a', 'e', 'i', 'o', 'u'].includes(caractere.charAt(0).toLocaleLowerCase())) {
    console.log('VOGAL')
} else {
    console.log('CONSOANTE')
}



//Faça um programa que receba três números e os imprima em ordem crescente.

let num1 = parseInt(prompt("Digite primeiro número"))
let num2 = parseInt(prompt("Digite segundo número"))
let num3 = parseInt(prompt("Digite terceiro número"))

const crescente = [num1, num2, num3]


crescente.sort();
console.log(crescente)



/*Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
obesa ou muito obesa.*/

let nome = prompt("Digite seu nome: ")
let peso = parseFloat(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))

let imc = peso / (altura ** 2)

imc = imc.toFixed(2)

console.log(`${nome} seu IMC é: ${imc}`)

if (imc < 18.5) {
    console.log("ABAIXO DO PESO");
} else if (imc <= 24.9) {
    console.log("PESO NORMAL");
} else if (imc <= 29.9) {
    console.log("SOBREPESO");
} else if (imc <= 39.9) {
    console.log("OBESO");
} else {
    console.log("MUITO OBESO");
}

/*Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
correspondente.*/

function obterNomeDoMes(numeroDoMes) {
    switch (numeroDoMes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mês inválido";
    }
}

const numeroDoMes = parseInt(prompt("Digite um número de mês (1 a 12):"));

const nomeDoMes = obterNomeDoMes(numeroDoMes);


console.log(`O número ${numeroDoMes} corresponde ao mês de ${nomeDoMes}.`);

/*Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
15%.*/


function calcularAumento(salario) {
    let aumento = 0;
    if (salario > 1500) {
        aumento = salario * 0.1; // Aumento de 10% para salários > 1500
    } else {
        aumento = salario * 0.15; // Aumento de 15% para salários <= 1500
    }
    return aumento;
}


const salarioInput = prompt('Digite o salário do funcionário: R$ ');
const salarioFuncionario = parseFloat(salarioInput);

if (isNaN(salarioFuncionario)) {
    console.log('Por favor, digite um valor numérico válido.');
} else {
    const aumento = calcularAumento(salarioFuncionario);
    const novoSalario = salarioFuncionario + aumento;

    console.log(`O aumento foi de R$ ${aumento.toFixed(2)}.`);
    console.log(`O novo salário é de R$ ${novoSalario.toFixed(2)}.`);
}

/*Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
exibindo uma mensagem apropriada.*/

var numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`O número ${numero} é divisível por 3 e por 5.`);
} else {
    console.log(`O número ${numero} não é divisível por 3 e por 5 ao mesmo tempo.`);
}


/*Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
informando se é um dia útil ou um fim de semana.*/

var diaSemana = prompt("Digite o dia da semana ex:(terça-feira):").toLowerCase();


if (diaSemana === "segunda-feira" || diaSemana === "terça-feira" || diaSemana === "quarta-feira" || diaSemana === "quinta-feira" || diaSemana === "sexta-feira") {
    console.log(`${diaSemana} é um dia útil.`);
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log(`${diaSemana} é um fim de semana.`);
} else {
    console.log("Dia da semana inválido.");
}



/*Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
"Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
switch/case.*/

var numero = parseInt(prompt("Digite um número inteiro de 1 a 5:"));

switch (numero) {
    case 1:
        console.log("Muito insuficiente");
        break;
    case 2:
        console.log("Insuficiente");
        break;
    case 3:
        console.log("Regular");
        break;
    case 4:
        console.log("Bom");
        break;
    case 5:
        console.log("Muito bom");
        break;
    default:
        console.log("Número fora do intervalo de 1 a 5.");
}

/*Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
Domingo, 2 - Segunda-feira, etc.).*/


var numero = parseInt(prompt("Digite um número entre 1 e 7:"));


switch (numero) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número fora do intervalo de 1 a 7.");
}


/*Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a
estrutura de controle try/catch para tratar exceções.*/

var numeroDecimal = prompt("Digite um número decimal:");

try {

    var numeroArredondado = Math.round(parseFloat(numeroDecimal));

    if (isNaN(numeroArredondado)) {
        throw new Error("Valor inválido.");
    }

    console.log("Número arredondado: " + numeroArredondado);
} catch (error) {
    console.log("Erro: " + error.message);
}



/*Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).*/

var idade = prompt("Digite a sua idade:");

idade = parseInt(idade);


if (idade >= 0 && idade <= 1) {
    console.log("Você é um bebê.");
} else if (idade >= 1 && idade <= 12) {
    console.log("Você é uma criança.");
} else if (idade >= 13 && idade <= 18) {
    console.log("Você é um adolescente.");
} else if (idade > 18) {
    console.log("Você é um adulto.");
} else {
    console.log("Idade inválida.");
}

/*Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
mensagem informando se é solteiro, casado, divorciado ou viúvo.*/



var estadoCivil = prompt("Digite o seu estado civil (solteiro, casado, divorciado ou viúvo):");


estadoCivil = estadoCivil.toLowerCase();


switch (estadoCivil) {
    case "solteiro":
        console.log("Você é solteiro(a).");
        break;
    case "casado":
        console.log("Você é casado(a).");
        break;
    case "divorciado":
        console.log("Você é divorciado(a).");
        break;
    case "viúvo":
        console.log("Você é viúvo(a).");
        break;
    default:
        console.log("Estado civil não reconhecido.");

}


/*Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).*/

var operacao = parseInt(prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));


switch (operacao) {
    case 1:
        var resultado = num1 + num2;
        console.log("Resultado da soma: " + resultado);
        break;
    case 2:
        var resultado = num1 - num2;
        console.log("Resultado da subtração: " + resultado);
        break;
    case 3:
        var resultado = num1 * num2;
        console.log("Resultado da multiplicação: " + resultado);
        break;
    case 4:
        if (num2 !== 0) {
            var resultado = num1 / num2;
            console.log("Resultado da divisão: " + resultado);
        } else {
            console.log("Não é possível dividir por zero.");
        }
        break;
    default:
        console.log("Operação não reconhecida.");
}


/*Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para
garantir que a idade digitada seja um valor inteiro válido.*/

var nome = prompt("Digite o seu nome:");

try {

    var idadeTexto = prompt("Digite a sua idade:");
    var idade = parseInt(idadeTexto);

    if (isNaN(idade)) {
        throw new Error("Idade inválida.");
    }

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
} catch (error) {
    console.log("Erro: " + error.message);
}


/*Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e
quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.*/

try {

    var valorEmMetros = parseFloat(prompt("Digite um valor em metros:"));

    if (isNaN(valorEmMetros)) {
        throw new Error("Valor inválido.");
    }


    var valorEmCentimetros = valorEmMetros * 100;
    var valorEmMilimetros = valorEmMetros * 1000;
    var valorEmQuilometros = valorEmMetros / 1000;

    console.log("Valor em Centímetros: " + valorEmCentimetros + " cm");
    console.log("Valor em Milímetros: " + valorEmMilimetros + " mm");
    console.log("Valor em Quilômetros: " + valorEmQuilometros + " km");
} catch (error) {
    console.log("Erro: " + error.message);
}
