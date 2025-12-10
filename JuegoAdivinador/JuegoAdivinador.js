// Ejercicio 6 – Juego del adivinador
// Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
// adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
// programa debe indicar si el número buscado es mayor o menor que el ingresado.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();

// Genera número aleatorio entre 1 y 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
// Variable que almacenará cada intento del usuario
let intento;
// Contador que registra el número total de intentos realizados por el usuario
let intentos = 0;
// Bucle que continúa ejecutándose hasta que el usuario adivine correctamente
while (intento !== numeroSecreto) {
    // Solicita al usuario que ingrese un número y lo convierte a entero
    intento = parseInt(prompt("Adivina el número (1 al 20): "));
    // Incrementa el contador de intentos después de cada entrada
    intentos++;

    // Si el intento es menor que el número secreto
    if (intento < numeroSecreto) {
        console.log("El número secreto es MAYOR");
    } 
    // Si el intento es mayor que el número secreto
    else if (intento > numeroSecreto) {
        console.log("El número secreto es MENOR");
    } 
    // Si el intento es igual al número secreto 
    else {
        // Muestra mensaje de felicitación con el total de intentos realizados
        console.log(`¡Correcto! Adivinaste en ${intentos} intentos`);
    }
}
