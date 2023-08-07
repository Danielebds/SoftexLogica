
var caractere = prompt("Digite um caractere:").toLowerCase();


if (caractere.match(/[a-z]/i)) {
    
    if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
        console.log("O caractere é uma vogal.");
    } else {
        console.log("O caractere é uma consoante.");
    }
} else {
    console.log("O caractere não é uma letra do alfabeto.");
}








