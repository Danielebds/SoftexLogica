function contarDigitosParesImpares(numero) {
    let numeroStr = numero.toString();
    let digitosPares = 0;
    let digitosImpares = 0;

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i]);
        if (digito % 2 === 0) {
            digitosPares++;
        } else {
            digitosImpares++;
        }
    }

    return { digitosPares, digitosImpares };
}  

let num = parseInt(prompt("Digite um número: "))

let resultado = contarDigitosParesImpares(num)

alert(`Digitos pares ${resultado.digitosPares}, Digitos impares ${resultado.digitosImpares}`)







