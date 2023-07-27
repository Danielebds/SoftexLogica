/*Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.*/

let cadastro = {
    nome: " ",
    endereco: "",
    cidade: "",
    cpf: "",
    rg: "",
    idade: "",
    nomeDoPai: "",
    nomeDaMae: "",
    peso: null,
    rendaBruta:null
}
console.log(cadastro)

function cadastrarDados() {
cadastro.nome = prompt ("Digite seu Nome")
alert(`Bem vindo:${cadastro.nome}`)

cadastro.endereco=prompt(`${cadastro.nome} Digite seu Endereço.`)
cadastro.cidade=prompt(`${cadastro.nome} Digite sua Cidade.`)
cadastro.cpf =prompt(`${cadastro.nome} Digite seu CPF.`)
cadastro.rg =prompt(`${cadastro.nome} Digite seu RG.`)
cadastro.idade =prompt(`${cadastro.nome} Digite sua idade.`)
cadastro.nomeDoPai =prompt(`${cadastro.nome} Digite o nome do Pai .`)
cadastro.nomeDaMae =prompt(`${cadastro.nome} Digite o nome da Mãe.`)
cadastro.peso=prompt(`${cadastro.nome} Digite seu Peso.`)
cadastro.rendaBruta =prompt(`${cadastro.nome} Digite sua Renda Bruta.`)
console.log(cadastro);

document.getElementById("nome").innerText = cadastro.nome
document.getElementById("endereco").innerText = cadastro.endereco
document.getElementById("cidade").innerText = cadastro.cidade
document.getElementById("cpf").innerText = cadastro.cpf
document.getElementById("rg").innerText = cadastro.rg
document.getElementById("idade").innerText = cadastro.idade
document.getElementById("nomeDoPai").innerText = cadastro.nomeDoPai
document.getElementById("nomeDaMae").innerText = cadastro.nomeDaMae
document.getElementById("peso").innerText = cadastro.peso
document.getElementById("rendaBruta").innerText = cadastro.rendaBruta
}