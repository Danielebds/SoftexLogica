const quantRodas= prompt("Digite a quantidade de rodas: ")
const pesoBruto = parseFloat (prompt("Digite o peso bruto em quilogramas: "))
const quantiPessoas= prompt("Digite a quantidade de  pessoas no veículo: ")


let categoriaHabilitacao = "";

if (quantRodas === 2 || quantRodas === 3) {
  categoriaHabilitacao = --
 
"A";
} 

else if (quantRodas === 4 && quantiPessoas <= 8 && pesoBruto <= 3500) {
  categoriaHabilitacao = 
 
"B";
} 

else if (quantRodas >= 4 && pesoBruto > 3500 && pesoBruto <= 6000) {
  categoriaHabilitacao = 
 
"C";
} 

else if (quantRodas >= 4 && quantiPessoas > 8) {
  categoriaHabilitacao = 
 
"D";
} 

else if (quantRodas >= 4 && pesoBruto > 6000) {
  categoriaHabilitacao = 
 
"E";
} else {
  categoriaHabilitacao = 
 
"Categoria não determinada";
}

console.log(`Para o veículo informado, a categoria de habilitação recomendada é: ${categoriaHabilitacao}`)






