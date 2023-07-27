/*Em uma inscrição, o usuário informou os seguintes dados:

- Nome: José Almeida da Silva
- CPF: 12345678900
- RG: 9517530
- Altura: 1,78
- Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:*/

//1.A proposta das variáveis;

//R - Armazenamentos de dados 

//2.Elaborada a declaração das variáveis;

let pessoa = {}

//Utilizado o comando de atribuição.

pessoa = {
    nome: "",
    cpf: "",
    rg: "",
    altura: null,
    endereco: ""
}
console.log(pessoa)

function cadastrarPessoa() {
    pessoa.nome = prompt(" Digite seu nome ")
    alert(`Bem vindo: ${pessoa.nome}`)

    pessoa.cpf = prompt(`${pessoa.nome}: Digite o seu CPF.`)
    pessoa.rg = prompt(`${pessoa.nome}: Digite o seu  RG.`)
    pessoa.altura = prompt(`${pessoa.nome}: Digite a sua ALTURA.`)
    pessoa.endereco = prompt(`${pessoa.nome}: Digite o seu ENDERECO.`)
    console.log(pessoa)

    document.getElementById("nome").innerText = pessoa.nome
    document.getElementById("cpf").innerText = pessoa.cpf
    document.getElementById("rg").innerText = pessoa.rg
    document.getElementById("altura").innerText = pessoa.altura
    document.getElementById("endereco").innerText = pessoa.endereco
}