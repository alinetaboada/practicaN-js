# practicaN-js
//Ejercicio 1:
//Simular la tirada de un juego de ruleta generando un número aleatorio 
//que representa la cantidad de posiciones por las que pasó la bolilla,
// conociendo que la ruleta debe dar mínimo 5 y máximo 10 vueltas, suponiendo
// que la bolilla empezó en el número 0, y sabiendo que los números posibles son del 0 al 36.

//Simular 10 tiradas e imprimir lo siguiente para cada intento:
//nro de juego
//Valor Aleatorio Generado
//Nro que cayó en la ruleta.

function simularTirada() {
    const vueltas = Math.floor(Math.random() * 6) + 5;
    let posicion = 0;
    for (let i = 0; i < vueltas; i++) {
        posicion = Math.floor(Math.random() * 37);
    }
    return { vueltas, posicion };
}

for (let juego = 1; juego <= 10; juego++) {
    const resultado = simularTirada();
    console.log(`Nro de Juego: ${juego}`);
    console.log(`Valor Aleatorio Generado: ${resultado.vueltas}`);
    console.log(`Nro que cayó en la ruleta: ${resultado.posicion}`);
    console.log();
}

