function buscaLinear(array, valor) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valor) {
        return i; 
      }
    }
    return -1;
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const valorBuscado = 20;
  
  const indiceEncontrado = buscaLinear(array, valorBuscado);
  
  if (indiceEncontrado !== -1) {
    console.log(`O valor ${valorBuscado} foi encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`O valor ${valorBuscado} não foi encontrado no array.`);
  }
  