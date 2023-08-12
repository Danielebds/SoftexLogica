/*Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
o while.*/

let numero;
let soma = 0;
let quantidade = 0;

while (true) {
  numero = parseInt(prompt("Digite um número (-1 para parar):"));

  if (numero === -1) {
    break;
  }

  soma += numero;
  quantidade++;
}

if (quantidade > 0) {
  const media = soma / quantidade;
  console.log(`A média dos números digitados é: ${media}`);
} else {
  console.log("Nenhum número foi digitado.");
}





