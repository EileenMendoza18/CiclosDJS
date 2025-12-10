// Ejercicio 4 – Promedio de notas
// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y 
// determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
// ingresar los datos de manera ordenada.

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = datos();

// Constante que define el número total de estudiantes a evaluar
const estudiantes = 5;
// Constante que define cuántas notas se solicitarán por cada estudiante
const notasPorEstudiante = 3;
// Bucle externo que itera por cada estudiante
for (let i = 1; i <= estudiantes; i++) {
    // Variable acumuladora que suma todas las notas del estudiante actual
    let suma = 0;
    // Bucle interno que solicita cada una de las notas del estudiante actual
    for (let j = 1; j <= notasPorEstudiante; j++) {
        // Solicita al usuario que ingrese una nota específica
        let nota = parseFloat(
            prompt(`Ingrese la nota ${j} del estudiante ${i}: `)
        );
        // Acumula la nota ingresada en la suma total del estudiante
        suma += nota;
    }
    // Calcula el promedio dividiendo la suma total entre el número de notas
    let promedio = suma / notasPorEstudiante;
    // Evalúa si el estudiante aprueba o reprueba según el promedio obtenido
    if (promedio >= 3.0) {
        // Si el promedio es mayor o igual a 3.0, el estudiante APRUEBA
        console.log(` \nEstudiante ${i} 
        Promedio: ${promedio.toFixed(2)}, el estudiante APRUEBA \n`);
    } else {
        // Si el promedio es menor a 3.0, el estudiante REPRUEBA
        console.log(`Estudiante ${i} 
        Promedio: ${promedio.toFixed(2)}, el estudiante REPRUEBA \n`);
    }
}
