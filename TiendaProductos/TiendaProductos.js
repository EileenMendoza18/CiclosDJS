// Ejercicio 5 – Tienda de productos
// Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
// de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
// compra y aplicar un descuento del 10% si el valor supera los $100.000.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();

// Variable acumuladora que almacena el total de la compra
let total = 0;
// Variable de control que determina si el usuario desea continuar agregando productos
let continuar = "si";
// Bucle principal que permite agregar productos mientras el usuario lo desee
while (continuar === "si") {
    // Solicita al usuario que ingrese el precio del producto actual
    let precio = parseInt(prompt("Ingrese el precio del producto: "));
    // Valida que el precio ingresado sea un valor positivo válido
    if (precio > 0) {
        // Si el precio es válido, lo suma al total acumulado de la compra
        total += precio;
    } else {
        // Si el precio es cero, negativo o no válido, muestra un mensaje de error
         console.log("Precio no válido");
    }
    // Pregunta al usuario si desea agregar otro producto a la compra
    continuar = prompt("Desea agregar otro producto? (si/no): ");
}
// Después de finalizar el registro de productos, verifica si aplica descuento
if (total > 100000) {
    // Calcula el monto del descuento (10% del total)
    let descuento = total * 0.10;
    // Resta el descuento del total para obtener el precio final
    total -= descuento;
    // Informa al usuario el monto del descuento aplicado
    console.log(`Descuento aplicado: $${descuento}`);
}
// Muestra el total final que el cliente debe pagar
console.log(`Total a pagar: $${total}`);
