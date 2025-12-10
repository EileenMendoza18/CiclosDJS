// Ejercicio 1 – Números primos
// Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
// condicionales para verificar qué números cumplen la condición de ser primos.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();
// Bucle principal que recorre todos los números del 2 al 50
for (let numero = 2; numero <= 50; numero++) {
    // Bandera booleana que asume inicialmente que el número es primo
    let esPrimo = true;
    // Bucle interno que verifica si el número actual tiene divisores
    for (let i = 2; i < numero; i++) {
        // Verifica si 'numero' es divisible por 'i' usando el operador módulo
        if (numero % i === 0) {
            // Cambia la bandera a false porque se encontró un divisor
            esPrimo = false;
            // Interrumpe el bucle interno inmediatamente
            break;
        }
    }
    // Después de verificar todos los posibles divisores
    if (esPrimo) {
        // Muestra el número primo en la consola
        console.log(numero);
    }
}
