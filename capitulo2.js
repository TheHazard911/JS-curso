// cada vez que escriba una variable que sea con let 

// Arrelgos 

// DEFINICION Y USOS 

// Frutas = ["cambur", "manzana", "Uva"];

// alert(Frutas[0])

// variableArreglo[N]; La N es la posicion del arreglo a mostrar 

// document.write(Frutas)

                // Arrays asociativos

// let equipo = {
//     Procesador: "core i3",
//     Memoria: "4gb max 16gb",
//     Disco: "320 GB HDD",
// };

// document.write(equipo["Disco"])



// BUCLES E ITERACION

// let numero = 0;
// while (numero < 5) {
    // Primero piensa y luego ejecuta
//     document.write("HOLA ESTO ES UN BUCLE <br>");
//     numero++;
// }

// let numero = 0;
// do {
//     // primero ejecuta y luego piensa
//     document.write("HOLA ESTO ES UN BUCLE <br>");
//     numero++;
// if (numero == 5) {
//  break;   
// }
// } while (numero <= 10) 

// ascendente
// for (let i = 0; i < 20; i++) {
//         document.write(i+1 + "<br>")
    
// }

// descendente
// for (let i = 20; i > 0; i--) {
//     document.write(i + "<br>")
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for in y for off

// for in devuelve la posicion de los elemetos

// let animales = ["vaca", "oveja", "caballo", "perro"]
// for (animal in animales ){
//     document.write(animal + "<br>")
// }

// for (animal of animales ){
//     document.write(animal + "<br>")
     
// }

        // sentencia label

//         array1= ["maria", "josefa", "roberta"]; 
//         array2= ["pedro", "marcelo", array1];

// for (array in array2){
//     if(array == 2){
//         for (let array of array1){
//             document.write(array + "<br>");
//         }
//     }
//     else{
//         document.write(array2[array] + "<br>");
        
//     }
// }

                // FUNCIONES

// Estructura
// function name(params) {
    
// }
// name()

// funcion flecha
// primera manera max 3 lineas
// const name = () => {
//     // sentencia de la funcion
// }

// segunda manera max 1 linea
// const name = parametro => sentencia de la funcion
 

// const saludar = () => {
//     let variable = prompt("Indica el nombre");
//     document.write(`hola ${variable}`);
// }

// saludar()
// ----------------------------------------------------------------------------------------------

                        // PROBLEMA DE COFLA 

// PROBLEMA (A)

// dejar pasar solo a los +18
// el primero que entre despues de las 2AM no paga


// let free = false;
// let hora = prompt("QUE HORA ES MI ESTIMADO?");
// const maquina = (time) => {

//     let edad = prompt("ingresa tu edad");
//     if(edad >= 18){
//         if(time >= 2 && time < 7 && free == false){
//             alert(`ENTRA MAQUINA son las ${time} AM y depaso gratis`);
//             free = true;
//         }else{
//             alert(`ENTRA MAQUINA, son las ${time} AM PERO PAGAS ENTRADA`);
//         }
//     }else{
//         alert("sorry no tienes 18 años perro, regresa por donde viniste");
//     }
// }

//     maquina(hora);

//                                PROBLEMA (B)

// let cantidad = prompt("CUANTOS ALUMNOS SON");
// alumnosTotales = [];
// for (let i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0];

// }

// const asistencia = (nombre) => {
//     let presencia = prompt(nombre);
//     if(presencia == "p" || presencia == "P"){
//         alumnosTotales[i][1]++;
//     }
// }

// for (let i = 0; i < 30; i++) {
//     for(alumno in alumnosTotales){
//         asistencia(alumnosTotales[alumno][0],alumno)
//     }
// }
// for(alumno in alumnosTotales){
//    let resultado = `
//    ${alumnosTotales[alumno][0]}:<br>
//    _____Presentes: ${alumnosTotales[alumno][1]} <br>
//    _____Ausentes: ${30 - alumnosTotales[alumno][1]} <br>
//    `;
//    if(30 - alumnosTotales[alumno][1] > 18){
//     resultado += "<b> REPROBADO POR INASISTENCIAS";
//    } else{
//     resultado += "<br><br>";
//    }
//    document.write(resultado);
// }

                        // problema c 
// calculadora que nos simplifique        

    
    alert("OPERACION A REALIZAR");
    op = prompt("1: SUMA, 2: RESTA, 3:multiplicar, 4:dividir");

const suma = (n1,n2) => {
    n1 = parseInt(prompt("ingresa un numero"))
    n2 = parseInt(prompt("ingresa un numero"))
    resultado = n1+n2;
    alert(`el resultado es ${resultado}`)
    
}

const resta = (n1,n2) => {
    n1 = parseInt(prompt("ingresa un numero"))
    n2 = parseInt(prompt("ingresa un numero"))
    resultado = n1-n2;
    alert(`el resultado es ${resultado}`)
    
}

const mult = (n1,n2) => {
    n1 = parseInt(prompt("ingresa un numero"))
    n2 = parseInt(prompt("ingresa un numero"))
    resultado = n1*n2;
    alert(`el resultado es ${resultado}`)
}

const div = (n1,n2) => {
    n1 = parseInt(prompt("ingresa un numero"))
    n2 = parseInt(prompt("ingresa un numero"))
    resultado = n1/n2;
    alert(`el resultado es ${resultado}`)
    
}

if(op == 1){
    suma();
 }
 else if(op == 2){
    resta();
 }
 else if(op == 3){
    mult();
}
else if(op == 4){
    div();
}
