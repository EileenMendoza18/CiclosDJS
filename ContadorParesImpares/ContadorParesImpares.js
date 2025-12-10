// Ejercicio 7 – Contador de pares e impares
// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
// fueron pares y cuántos impares.


// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();
// Contador para almacenar la cantidad de números pares ingresados
let pares = 0;
// Contador para almacenar la cantidad de números impares ingresados
let impares = 0;
// Bucle que se ejecuta exactamente 10 veces para solicitar los 10 números
// La variable 'i' representa el número de iteración actual (1 al 10)
for (let i = 1; i <= 10; i++) {
    // Solicita al usuario que ingrese un número y lo convierte a entero
    let numero = parseInt(prompt(`Ingrese el número ${i} : `));
    // Verifica si el número es par utilizando el operador módulo
    if (numero % 2 === 0) {
        pares++;// Incrementa el contador de números pares
    } 
    // Incrementa el contador de números pares
    else {
        impares++;// Incrementa el contador de números impares
    }
}
// Muestra el resultado final: cantidad total de números pares ingresados
console.log("Cantidad de números pares: " + pares);
// Muestra el resultado final: cantidad total de números impares ingresados
console.log("Cantidad de números impares: " + impares);
