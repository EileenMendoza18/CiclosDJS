// Ejercicio 8 – Control de acceso
// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
// 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
// acierta, mostrar “Bienvenido”.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();

// Constante que almacena el nombre de usuario correcto para el acceso
const usuarioCorrecto = "admin";

// Constante que almacena la contraseña correcta para el acceso
const claveCorrecta = "1234";
// Contador que registra el número de intentos fallidos realizados
let intentos = 0;
// Bandera booleana que indica si el usuario ha logrado acceder exitosamente
let acceso = false;
// Bucle que permite hasta 3 intentos de inicio de sesión
while (intentos < 3 && !acceso) {
    // Solicita el nombre de usuario al usuario
    let usuario = prompt("Ingrese el usuario: ");
    // Solicita la contraseña al usuario
    let clave = prompt("Ingrese la contraseña: ");
    // Verifica si tanto el usuario como la contraseña son correctos
    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        // Cambia la bandera de acceso a true para indicar autenticación exitosa
        acceso = true;
        // Muestra mensaje de bienvenida al usuario
        console.log("Bienvenido");
    } 
    // Si las credenciales son incorrectas
    else {
        // Incrementa el contador de intentos fallidos
        intentos++;
        // Informa al usuario que los datos son incorrectos y muestra el número de intento
        console.log(`Datos incorrectos. Intento ${intentos} de 3`);
    }
}
// Verifica si después del bucle el usuario NO logró acceder
if (!acceso) {
    // Verifica si después del bucle el usuario NO logró acceder
    console.log("Acceso denegado");
}
