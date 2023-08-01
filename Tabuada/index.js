let numInt = parseInt (prompt  ("Digite um número inteiro: "));

if (!isNaN(numInt)) {
    console.log(`Tabuada do número ${numInt}:`);

    for (let i =1;  i <=10; i++){
        let result = numInt * i;
        console.log(`${numInt} * ${i} = ${result}`);
    }
} else {

    console.log("Valor inválido");
}










