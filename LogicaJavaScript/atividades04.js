//01-Implemente o código do slide de número 5.

let frase = prompt("Entrer a primeira frase");
console.log(frase);

//02-Implemente o código do slide de número 13.

let string = "123"
console.log(typeof Number(string));

let number = 321
console.log(typeof String(number));

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
console.log(`Bem vindo: ${nome}`);

/*Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
inteiro.*/

let idade = prompt("Digite sua idade");
let idadeInt = parseInt(idade)


if (!isNaN(idadeInt)) {
    console.log("Sua idade é:", idadeInt);
} else {
    console.log("idade invalida")
}

//Receba um número inteiro do usuário e converta-o em um número decimal (float).

let numInt = prompt("Digite um número inteiro");
let numDeci = parseInt(numInt).toFixed(2)


if (!isNaN(numDeci)) {
    console.log("Seu número Decimal:", numDeci);
} else {
    console.log("número invalido")
}

//Peça ao usuário para digitar dois números inteiros e exiba a soma deles.

let num1 = prompt("Digite um número Inteiro");
let num2 = prompt("Digite o segundo número Inteiro");

let resultado = Number(numero1) + Number(numero2);

alert(resultado)

//Receba um número decimal do usuário e calcule o seu quadrado.

let NumDeci = parseFloat(prompt("Digite um número Decimal:"));

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

alert(`-- ${nome} ${sobrenome}`);

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
let sobrenome = prompt("Digite seu Sobrenome")


alert(`-- ${sobrenome} ${nome} -- `)

//Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres)

const string = prompt("Digite uma palavra: ")

alert(`-- A quantidade de Caractes é ${string.length} --`)

//Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.

let numeroInt = parseInt(prompt("Digite um numero Inteiro: "));

if (Number(numeroInt) % 2 == 0) {
    alert(`Seu numero ${numeroInt} é par`)
} else {
    alert(`Seu numero ${numeroInt} é ímpar`)
}

//Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.

const numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

if (Number(numeroInteiro) >= 0) {

    alert(`Seu número ${numeroInteiro} é Positivo`)
} else {
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

    /*Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
    "Você é casado(a)", "Você é solteiro(a)", etc.).*/

    const estadoCivil = prompt("Digite seu estado civil: ")

    alert(`-- Vocé é  ${estadoCivil} --`)

    /*Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e
    exiba o resultado.*/

    let BaseRetangulo = prompt("Digite a base do rentângulo: ")
    let AlturaRetangulo = prompt("Digite a altura do rentângulo: ")

    let area = BaseRetangulo * AlturaRetangulo

    alert(`-- O resultado é ${area}m² --`

/*Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
sua escolha).*/


const cidade = prompt("Digite a sua cidade: ")

    if (cidade.charAt(0).toLocaleUpperCase() == "P") {
        alert(`Sua Cidade começa com a Letra P`)
    } else {
        alert(`Sua Cidade não começa com a Letra P`)
    }

    //Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.


    let numDeci1 = parseFloat(prompt("Digite um número Decimal"));
    let numDeci2 = parseFloat(prompt("Digite o segundo número Decimal"));

    let result = numDeci1 % numDeci2

    alert(result)

    //Solicite ao usuário um número decimal e converta-o em um número inteiro.

    let numeroDecimal = parseFloat(prompt("Digite um numero Decimal"))
    let numeroInteiro = parseInt(numeroDecimal)


    alert(numeroInteiro)

    /*Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
    novamente para uma string antes de exibi-lo.*/

    const string = prompt("Digite um número inteiro")

    let soma = parseInt(string) + 10

    let somaString = soma.toString()

    alert(somaString)
    console.log(typeof soma)
    console.log(typeof somaString)

    /*Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
    separadamente, convertendo-os em números inteiros.*/

    let dataString = prompt('Digite uma data no formato "dd/mm/aaaa": ')

    let dataArray = dataString.split('/')

    alert(`Dia ${parseInt(dataArray[0])}, Mês ${parseInt(dataArray[1])}, Ano ${parseInt(dataArray[2])}`)

    /*Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
    mensagem completa, como "Você mora em [cidade], [estado]."*/

    let cidade = prompt("Digite uma Cidade: ")
    let estado = prompt("Digite um Estado ")

    alert(`Vocé mora em ${cidade} , ${estado}`)

    /*Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
    boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".*/

    let ano = prompt("Digite seu ano ")


    alert(`--Bem vindo ao nosso programa, nascido em ${ano}--`)

    /*Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
    string, separando-os com um espaço.*/


    const numero = parseInt(prompt("Digite um número inteiro: "))
    const string = prompt("Digite um texto: ")

    alert(`${string} ${numero.toString()}`)

    /*Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
    adicionando o símbolo de moeda da sua escolha.*/


    let nomeProduto = prompt("Digite um nome de um Produto ")
    let precoProduto = parseFloat(prompt(`Digite o preço do ${nomeProduto}`))

    alert(`${nomeProduto.toLocaleUpperCase()}: R$${precoProduto.toFixed(2)}`)

    /*Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro
    desse número.*/

    let numInt = parseInt(prompt("Digite um número inteiro: "))

    let mensagem = numInt * 2

    alert(`O dobro do número ${numInt} é ${mensagem} `)

    /*Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de
    agradecimento personalizada.*/

    let email = prompt("Digite seu email: ")
    let mensagemPersonalizada = "Obrigado(a) pelo envio do email."

    alert(`${email}: ${mensagemPersonalizada}`)

    /*Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
    (divisão inteira) entre eles.*/

    let num1 = parseInt(prompt("Digite um número inteiro"))
    let num2 = parseInt(prompt("Digite segundo número inteiro"))

    let soma = num1 + num2

    let diferenca = num1 - num2

    let produto = num1 * num2

    let quociente = parseInt(num1 / num2)


    console.log(`Soma: ${soma}`)
    console.log(`Diferença: ${diferenca}`);
    console.log(`Produto ${produto}`)
    console.log(`Quociente ${quociente}`)

    /*Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do
    triângulo.*/

    let baseTriangulo = prompt("Digite o número da base triângulo: ")
    let alturaTriangulo = prompt("Digite o número da altura triângulo: ")
    let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

    alert(areaTriangulo)

    /*Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).*/

    const PI = 3.14
    let raio = parseFloat(prompt("Digite o tamanho do raio: "))

    let perimetro = 2 * PI * raio

    alert(`O perimetro é: ${perimetro.toFixed(2)}`)

    /*Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o
    perímetro do retângulo.*/


    let BaseRetangulo = prompt("Digite o número da base do retângulo ")
    let AlturaRetangulo = prompt("Digite o número da altura do retângulo")

    let perimetroRetangulo = (BaseRetangulo * 2) + (AlturaRetangulo * 2)

    alert(perimetroRetangulo)

/*Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
aritmética desses números.*/

let numero1 = parseFloat(prompt("Digite um número decimal:"))
let numero2 = parseFloat(prompt("Digite um número decimal:"))
let numero3 = parseFloat(prompt("Digite um número decimal:"))

let mediaAritmetica = ( numero1 + numero2 + numero3 ) /3

alert(mediaAritmetica)

/*Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
viveu (considerando um ano com 365 dias).*/

let idade = parseInt(prompt("Digite sua  idade: "))
let dias = idade * 365
let meses = idade * 12

console.log(`Dias: ${dias}`)
console.log(`Meses: ${meses}`)
/*Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor
para dólares e exiba o resultado.*/

const valorReais = parseFloat(prompt("Digite o valor em Reais: "))
const cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do Dolar"))

if (isNaN(valorReais) || isNaN(cotacaoDolar)) {
    alert(`Por favor , digite valorees numéricos válidos`);
} else {
    const valorDolar = valorReais / cotacaoDolar
    alert(`O valor em dólares é: ${valorDolar.toFixed(2)}`)
}

//Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.

let numDecimal = parseFloat (prompt("Digite um número decimal: "))

let numInt = Math.round(numDecimal)

console.log(numInt);

/*Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *
n3. */

let num1 = parseInt(prompt('Digite um numero'))

let num2 = parseInt(prompt('Digite outro numero'))

let num3 = parseInt(prompt('Digite outro numero'))

let resultado = (num1 + num2) * num3

console.log(resultado)

/*Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
a fórmula: Fahrenheit = (Celsius * 9/5) + 32. */

let tGrausCelsius = Number(prompt("Digite uma temperature em Graus Celsius: "))

let tFahrenheit = (tGrausCelsius * (9/5)) + 32

console.log(`Temperatura em Fahrenheit: ${tFahrenheit}°F`)