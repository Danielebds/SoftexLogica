const nome =toStringz(prompt("Digite seu nome: "))

alert(`Bem vinda ${nome}`)

let idade = parseInt(prompt("Digite sua idade: "))
alert(`${nome} tem  ${idade} anos`)

let altura = parseFloat(prompt("Digite sua altura: "))

alert(`${nome} tem ${altura} altura`)

let maiorDeidade = Boolean(idade)

if (maiorDeidade > 18) {
    alert(`${nome} é maior de idade`)
} else if (maiorDeidade < 18) {
    alert(`${nome} é menor de idade`);
}


