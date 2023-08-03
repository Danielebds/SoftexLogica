/*Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
a fórmula: Fahrenheit = (Celsius * 9/5) + 32. */

let tGrausCelsius = Number(prompt("Digite uma temperature em Graus Celsius: "))

let tFahrenheit = (tGrausCelsius * (9/5)) + 32

console.log(`Temperatura em Fahrenheit: ${tFahrenheit}°F`)