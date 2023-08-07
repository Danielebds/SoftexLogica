/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */

let x = 0
let y = 0
let z = 0
let brancos = 0
let nulos = 0

let finalizar = false

do {
    let votoValido = false
    do {
        var voto = prompt("candidato_X => 889 \ncandidato_Y => 847 \ncandidato_Z => 515 \nbranco => 0")

        if (!isNaN(voto)) {
            votoValido = true
            voto = parseInt(voto)
        } else {
            alert("Seu voto é inválido, vote novamente!")
        }
    } while (!votoValido);

    switch (voto) {
        case 889:
            x++
            break;
        
        case 847:
            y++
            break;

        case 515:
            z++
            break;

        case 0:
            brancos++
        default:
            nulos++
    }

    let op = Number(prompt('Deseja finalizar a votação: Sim - 1 / Não - 0'))

    if (op == 1) {
        finalizar = true
    }
} while (!finalizar);

let result = ''
if (x > y && x > z) {
    result = 'candidato_X'
} else if (y > x && y > z) {
    result = 'candidato_Y'
} else if (z > x && z > y) {
    result = 'candidato_Z'
} else {
    result = 'EMPATE'
}

let totalVotos = x + y + z + nulos

alert(`Vencedor: ${result}${result != 'EMPATE' ? ', obteve o maior número de votos' : ''}. \nCandidato_X: ${x} \nCandidato_Y: ${y} \nCandidato_Z: ${z} \nVotos brancos: ${brancos} \nVotos nulos: ${nulos} \nTotal votos: ${totalVotos}`)