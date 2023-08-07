/*Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.*/

class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

function criaPessoa() {
    const nome = prompt("Digite o nome da pessoa:");
    const idade = parseInt(prompt("Digite a idade da pessoa:"));
    return new Pessoa(nome, idade);
}

const pessoa1 = criaPessoa();
const pessoa2 = criaPessoa();
const pessoa3 = criaPessoa();
const pessoa4 = criaPessoa();

pessoa1.filho = pessoa4;
pessoa3.filho = pessoa1;
pessoa4.filho = pessoa2;

let lista = [pessoa1, pessoa2, pessoa3, pessoa4]

lista.forEach(element => {
    console.log('-----------------------')
    console.log(`Nome: ${element.nome}`)
    console.log(`Idade: ${element.idade}`);
    
    if (element.filho) {
        console.log("Filho(a)")
        console.log(`Nome: ${element.filho.nome}`)
        console.log(`Idade: ${element.filho.idade}`);
    }
    console.log('-----------------------')
})