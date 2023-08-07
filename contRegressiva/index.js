/*
Faça um código, utilizando o Google Blockly, 

que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.
 
Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo. */

let segundos = parseInt(prompt("Passe os segundos para a contagem regressiva: "))

console.log("iniciando contagem regressiva")

const interval = setInterval(() => {
    console.log(segundos)
    
    if (segundos <= 0) {
        console.log("BUM!")
        clearInterval(interval)
    } else {
        segundos--
    }
}, 1000)