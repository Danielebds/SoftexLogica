try {
   
    var valorEmMetros = parseFloat(prompt("Digite um valor em metros:"));
  
    if (isNaN(valorEmMetros)) {
      throw new Error("Valor inválido.");
    }
  

    var valorEmCentimetros = valorEmMetros * 100;
    var valorEmMilimetros = valorEmMetros * 1000;
    var valorEmQuilometros = valorEmMetros / 1000;
  
    console.log("Valor em Centímetros: " + valorEmCentimetros + " cm");
    console.log("Valor em Milímetros: " + valorEmMilimetros + " mm");
    console.log("Valor em Quilômetros: " + valorEmQuilometros + " km");
  } catch (error) {
    console.log("Erro: " + error.message);
  }
  







