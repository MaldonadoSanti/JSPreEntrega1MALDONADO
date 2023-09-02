// VARIABLES Y ARITMETICA CLASE 01


// console.log("hola este es el archivo linkeable de JS")

// Formas de declarar una variable 
// con let o con var
//  var libro = "Aleph"
//  console.log(libro)
//  Reasignamos el valor 
// libro = "Cien años de vida"
//  console.log(libro)

// segunda forma
// let precio = 200
// precio = 1200
// console.log(precio)
// let editorial = "sudamerican"
// es una constante y no puede reasignarse su valor durante la ejecucion
// const PI = 3.14
// PI = 2


// tipos de datos 
// con comillas ("es un string" tipo texto) y sin comillas y son numeros (es de tipo number)
// y si utiliza las palabras TRUE or FALSE es un boolean
// let valor = false
// valor = true
// console.log(valor)

// errores comunes en declarar variables
// no podemos declarar dos veces una misma variable
// let precio = 2500
// let Precio = 300
// console.log("El valor de Precio es:"+Precio)

// concatenar
// console.log("El titulo del libro es " + libro+" y la editorial es "+ editorial + " con un precio de " + precio)

// forma alternativa
// backticks ``

// Prompt("") metodo de entrada de datos (input)
// let nombreIngresado =prompt("ingrese el titulo del libro :D")
// console.log(` El titulo del libro es ${nombreIngresado}`)

// alert ("") metodos de salida (output) : console.log - alert
// console.log(`El titulo de su libro es ${nombreIngresado}`)

// alert("El titulo de su libro es " + nombreIngresado)



// INGRESAR DOS VALORES POR PROMPT Y SUMARLOS (PARSEINT ES PARA CAMBIAR DE STRIN -TEXTO- A NUMBER -NUMERO-)
// let numero1 = parseInt(prompt("Ingrese el primer numero que desea sumar"))
// let numero2 = parseInt(prompt("Ingrese el segundo numero que desea sumar"))
// let sumar = (numero1 + numero2)
// alert(`La suma de los dos numeros ingresado es ${sumar}`)

// Algoritmo que ingrese el precio del libro mas el 21% del IVA
// let precioLibro = parseInt(prompt("Ingrese el precio del libro"))
//  const IVA = 0.21
//  let ivaLibro = precioLibro * IVA
//  alert(` El valor del IVA del libro es ${ivaLibro}`)
//  console.log(` El IVA del libro es ${ivaLibro}`)
// alert(` El precio original del libro es ${precioLibro - ivaLibro}`)


// para suma (+) para resta (-) para multiplicacion (*) para division (/)

// let numeroInventado = parseInt (prompt("Ingrese el numero que desea dividir"))
// let numeroDivisor = parseInt(prompt("ingrese el divisor"))
// let resultado = parseInt(numeroInventado / numeroDivisor)
// alert(` El resultado de ${numeroInventado} dividido ${numeroDivisor} es ${resultado}`)




// CONDICIONALES O CICLOS CLASE 02
// estructura IF
// if(true){
//     // bloque de codigo a ejecutar
//     console.log("vas a ver este mensaje");
// }
// if(false){
//     console.log("no vas a ver este mensaje");
// }
// CUANDO HAGAMOS ESTA OPERACION LO QUE NOSOTROS VEREMOS ES EL VALOR DE TRUE, YA QUE AL SER FALSE NO SE MOSTRARIA
// mayor>
// menor<
// operador de asignacion = (un signo igual)
// operador de comparacion o de equivalencia == (son dos signos iguales)

// let precio = 7000
// // estructura de decision o control de flujos
// if(precio>=5000){
//     // instrucciones se ejecutan en caso de ser verdadera la condición
//     console.log("el libro tiene un 10% de descuento");
// }

// else (sino) si se cumple esta condicion, haz esto; si No se cumple haz esto otro, un else siempre va precedido por un if

// let color = "rojo";
//  if(color == "rojo"){
//     console.log("El color si es rojo");
//  }else{
//     console.log("el color NO es rojo");
//  }


// condiciones anidadas if... else if
// let precio = 100.5;

// if (precio < 20) {
//     alert("El precio es menor que 20");
// }
// else if (precio < 50) {
//     alert("El precio es menor que 50");
// }
// else if (precio < 100) {
//     alert("El precio es menor que 100");
// }
// else {
//     alert("El precio es mayor que 100");
// }

// toLowerCase es para pasar todo a minuscula
// toUpperCase es para pasar todo a mayuscula





// if( color == "azul"){
//     console.log("El color es primario");
// }else if(color == "rojo"){
//     console.log("El color es primario");
// }else if(color == "amarillo"){
//     console.log("El color es primario");
// } else{
//     console.log("El color no es primario")
// }



// RECONSTRUIR LAS CONDICIONES ANIDADAS EN UNA SOLA CONDICIONM CON OPERADORES LOGICOS

// let color = prompt("Ingrese su color favorito")

// if(color == "azul" || color == "rojo" || color == "amarillo"){
//     console.log("El color es primario");
// }else{
//     console.log("El color NO es primario");
// }


// // SWITCH PERMITE REPRESENTAR UN FLUJO DE DECISION
// switch(color.toLowerCase()){
//     case "rojo":
//         console.log(`El color es primario y es rojo`)
//         break
//         case "azul":
//             console.log(`El color es primario y es azul`)
//             break
//             case "amarillo":
//                 console.log(`El color es primario y es amarillo`)
//                 break
//                 default:
//                     console.log(`El color NO es primario`)
// }




// CICLOS POR CONTEO FOR
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// DESDE; HASTA ; ACTUALIZACION
// for(let index = 0; index <=10; index = index + 1){
//     // iria desde el 0 hasta el 100. si yo pongo 5;25;2 iria desde el 5 hasta el 25 de 2 en 2
//     console.log(index)
// }

// ciclo para mostrar una tabla de ultiplicaciones ingresada por le usuario
// let num = parseInt(prompt(`Ingrese el numero que desea saber de la tabla de multiplicar del 0 al 10`))

// for(let i = 0 ; i <= 10 ; i++){
//     console.log(`${num} * ${i} = ${num*i}`)
// }

// SIMULADOR QUE PREGUNTE AL USUARIO EL NOMBRE Y LA CANTIDAD DE NOTAS QUE DESEA INGRESARY EL PROMEDIO DE ESAS NOTAS
// let nombre = prompt("ingrese el nombre del alumno/a")
// let cantNotas = parseInt(prompt(`Ingrese la cantidad de notas de ${nombre}`))
// let total = 0
// for(let i= 1 ; i <= cantNotas ; i ++){
//     let nota = parseInt(prompt(`ingrese la nota n° ${i} de ${nombre}`));
//     console.log(nota)
//     // ACUMULADOR
//     total = total + nota
//     //  promedio total / cantNotas
// }
// let promedio = total/cantNotas
// console.log(`El total de las notas de ${nombre} es ${total} y su promedio es ${promedio}`)


alert("SIMULADOR DE TIENDA ONLINE")


const precioStussy = 7500;
const precioEssential = 8000;


let cantidadStussy = 0;
let cantidadEssential = 0;


let continuarComprando = true;

do {
    console.log("Seleccione un buzo:");
    console.log("1. Buzo Stussy - $7500");
    console.log("2. Buzo Essential - $8000");
  
    const opcion = prompt("Elija la opción 1 o 2, o escriba 'fin' para finalizar la compra:");
  switch (opcion) {
    case '1':
      const cantidad1 = parseInt(prompt("Ingrese la cantidad de Buzos Stussy que desea comprar:"));
      if (!isNaN(cantidad1) && cantidad1 >= 1) {
        cantidadStussy += cantidad1;
      } else {
        console.log("Cantidad no válida. Por favor, ingrese un número válido.");
      }
      break;

    case '2':
      const cantidad2 = parseInt(prompt("Ingrese la cantidad de Buzos Essential que desea comprar:"));
      if (!isNaN(cantidad2) && cantidad2 >= 0) {
        cantidadEssential += cantidad2;
      } else {
        console.log("Cantidad no válida. Por favor, ingrese un número válido.");
      }
      break;

    case 'fin':
      continuarComprando = false;
      break;

    default:
      console.log("Opción no válida. Por favor, elija una opción válida.");
      break;
  }
} while (continuarComprando);


const totalBuzo1 = cantidadStussy * precioStussy;
const totalBuzo2 = cantidadEssential * precioEssential;
const precioTotal = totalBuzo1 + totalBuzo2;

console.log("Resumen de la compra:");
console.log(`Cantidad de Buzos Stussy: ${cantidadStussy}`);
console.log(`Cantidad de Buzos Essential: ${cantidadEssential}`);
console.log(`Total Buzo Stussy: $${totalBuzo1}`);
console.log(`Total Buzo Essential: $${totalBuzo2}`);
console.log(`Precio total de la compra: $${precioTotal}`);
