const nome = prompt("Digite seu nome: ")
let repetir = true

do {
    const nascimento = prompt("Digite ano de nascimento: ")

    let anoAtual = prompt("Digite o ano atual")

    let idade = anoAtual - nascimento
    
    if (!isNaN(nascimento) && nascimento >= 1922 && nascimento <= 2023) {
        repetir = false
        alert(`${nome} completou ${idade}`)
    } else {
        alert(`informe ano valido`)
    }
} while (repetir)

