/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.*/

let nomes = [];
let idades = [];
let coresFavoritas = [];


for (let i = 0; i < 10; i++) {
  let nome = prompt(`Insira o nome da pessoa ${i + 1}:`);
  nomes.push(nome);

  let idade = parseInt(prompt(`Insira a idade de ${nome}:`));
  idades.push(idade);

  let corFavorita = prompt(`Insira a cor favorita de ${nome}:`);
  coresFavoritas.push(corFavorita);
}


console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);


coresFavoritas[0] = "bege";
idades[2] = 30;


console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);





