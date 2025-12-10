// Ejercicio 2 – Tabla de multiplicar personalizada
// Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
// multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
// consultar otra tabla.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();

// Bandera booleana que controla el bucle principal del programa
let continuar = true;
// Bucle principal que mantiene el programa activo hasta que el usuario decida salir
while (continuar) {
    // Solicita al usuario que ingrese el número base para la tabla de multiplicar
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));
    // Bucle que genera la tabla de multiplicar del número ingresado
    for (let i = 1; i <= 12; i++) {
        // Muestra cada línea de la tabla en formato: "numero x multiplicador = resultado"
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    // Después de mostrar la tabla completa, pregunta si desea consultar otra
    let respuesta = prompt("Desea consultar otra tabla? (si/no): ");
    // Evalúa la respuesta del usuario (convertida a minúsculas para comparación uniforme)
    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}
