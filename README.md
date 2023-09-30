
//Ejercicio 2:
//Generar un número aleatorio que represente la posición inicial de 
//un ángulo entre 0 y 359 grados. Generar un segundo número aleatorio cuyo valor 
//represente dar entre 5 y 10 vueltas al círculo desde la posición inicial. 

//Imprimir:
//Posición o ángulo Inicial G.A.: 90
//Valor Aleatorio Generado en Grados: 2523
//Ángulo Final: 93


const posicionInicial = Math.floor(Math.random() * 360);
const vueltas = Math.floor(Math.random() * 6) + 5;
const anguloFinal = (posicionInicial + vueltas * 360) % 360;
console.log(`Posición o ángulo Inicial G.A.: ${posicionInicial}`);
console.log(`Valor Aleatorio Generado en Grados: vueltas * 360}`);
console.log(`Ángulo Final: ${anguloFinal}`);
