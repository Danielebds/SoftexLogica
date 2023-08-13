let primeiroNumero;
let ultimoNumero;
let pares = 0;
let impares = 0;

while (true) {
  const numero = parseInt(prompt('Digite um número inteiro (0 para parar):'));

  if (numero === 0) {
    break;
  }

  if (primeiroNumero === undefined) {
    primeiroNumero = numero;
  }

  ultimoNumero = numero;

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Quantidade de números pares entre ${primeiroNumero} e ${ultimoNumero}: ${pares}`);
console.log(`Quantidade de números ímpares entre ${primeiroNumero} e ${ultimoNumero}: ${impares}`);















