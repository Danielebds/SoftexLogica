/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.*/

let animais = [];


for (let i = 0; i < 5; i++) {
  let nome = prompt(`Insira o nome do animal ${i + 1}:`);
  let especie = prompt(`Insira a espécie do ${nome}:`);
  let idade = parseInt(prompt(`Insira a idade do ${nome}:`));

  animais.push([nome, especie, idade]);
}


for (let i = 0; i < animais.length; i++) {
  console.log("Animal", i + 1);
  console.log("Nome:", animais[i][0]);
  console.log("Espécie:", animais[i][1]);
  console.log("Idade:", animais[i][2]);
  console.log("----------------");
}
