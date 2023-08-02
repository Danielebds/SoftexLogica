//Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.


const nome = prompt("Digite seu Nome: ")
const caracteres = nome.length

if (caracteres > 5) {
    alert(`${nome} seu nome tem mais que 5 caracteres`)
} else {
    alert(`${nome} seu nome tem 5 ou menos caracteres`)
}


