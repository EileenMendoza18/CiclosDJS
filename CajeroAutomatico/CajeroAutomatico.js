// Ejercicio 3 – Cajero automático
// Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
// definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
// fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
// error y no permitir la transacción.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();
// Constante que define el saldo inicial del usuario en el cajero
const saldoInicial = 500000; // saldo fijo
// Variable que almacena el saldo actual (va disminuyendo con cada retiro)
let saldo = saldoInicial;
// Mientras sea true, el usuario puede seguir realizando operaciones
let continuar = true;
// Bucle principal que mantiene activo el cajero automático
while (continuar) {
    // Muestra el saldo actual al usuario antes de cada operación
    console.log(`Su saldo actual es: $${saldo}`);
    // Solicita al usuario el monto que desea retirar y lo convierte a número entero
    let retiro = parseInt(prompt(`Ingrese el monto a retirar: `));
    // Valida si el monto a retirar excede el saldo disponible
    if (retiro > saldo) {
        console.log("Error: saldo insuficiente");
    } 
    // Valida si el monto es positivo y procede con el retiro
    else if (retiro > 0) {
        // Resta el monto retirado del saldo actual
        saldo -= retiro;
        // Confirma la operación exitosa y muestra el nuevo saldo
        console.log(`Retiro exitoso. Saldo restante: $${saldo} `);
    } 
    // Maneja el caso de valores inválidos (cero, negativos o no numéricos)
    else {
        console.log("Ingrese un valor válido");
    }
    // Maneja el caso de valores inválidos (cero, negativos o no numéricos)
    let opcion = prompt("Desea realizar otro retiro? (si/no): ");
    // Verifica la respuesta del usuario (convierte a minúsculas para comparación)
    // Si la respuesta NO es "si", termina el bucle
    if (opcion.toLowerCase() !== "si") {
        continuar = false;
    }
}
