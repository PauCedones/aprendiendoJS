// ejemplo de return

const sumarDos = (numero) => {
    let valorDeRetorno = numero + 2;
    return valorDeRetorno;
    //return numero + 2;
 }

 /*****************************************
 * 
 * RETURN
 * 
 * El return nos permite, desde nuestra función,
 * devolver un  valor, de la misma forma que un
 * parámetro nos permite recibir un valor.
 * Ej:
 * function myFunction(){
 *      return "mi valor";
 * }
 * 
 * El return va a cortar la ejecución de la
 * función. Con esto, podemos controlar incluso
 * el flujo de la misma.
 * Ej:
 * function mySwitchFunction(value) {
 *      switch(value) {
 *          case 1:
 *              return "el valor fue 1";
 *          case 2:
 *              return "el valor fue 2";
 *          default:
 *              return "no nos interesa el valor ingresado";
 *      }
 * }
 * 
 * El return puede devolvernos cualquier tipo de dato,
 * por ejemplo, strings, números, booleanos, 
 * arrays u objetos.
 * 
 *****************************************/


 // 1
/***********************************************
 * 
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 *  
 ***********************************************/


//////////////////forma con expresiones regulares que no usa return pero que esta bueno tener

 const damevocales = (frase) => {
     frase =frase.match(/[aeiou]/gi).length;
     console.log(frase);
 }

 damevocales("gano fernandez vamoos");

 ///////////////////////////////////////

 //AHORA VAMOS A HACER EL EJERCICIO CON RETURN

 const damevocales = (frase) => {

    let listavocales = "aeiouAEIOU";
    let vcontador = 0;
    
    for( i = 0; i < frase.length ; i++){
    
      if (listavocales.indexOf(frase[i]) !== -1){
    
        vcontador += 1;
      }
    
    }
    return vcontador;
}

 damevocales ("se fue el gatooo");


 // 2
 /***********************************************
 * 
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la 
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *  
 ***********************************************/

 const censura = (frase) => {
    let censurador = prompt ("que tenes ganas de censurar hoy?");

    if(censurador.length > 1){

        throw "NO ESCRIBAS DE MAS" ;
    }

    frase= frase.split(censurador).join("");
     


    return frase;
 }

 censura ("blablñablña");


 //la forma rocio

 const mifunction = (frase) =>{
    let askCharacter= prompt ("decime un caracter de la frase ingresada");
    if(askCharacter.length>1){
        throw "Error! se permita sólo un caracter" ;
    }
    let newFrase= "";
    let letra = "";
    for (i=0; i<frase.length; i++){
        letra = frase[i];
        if(letra!=askCharacter){
            newFrase = newFrase + frase[i];
        }
    }
    return newFrase;
 }
 console.log(mifunction("hola como estas"))

 // la forma lujanesca

 const quitameEsto = (unaFrase) => {
   
    let terminator = prompt("Dame un caracter para quitar de la frase :D");
     
    if(terminator.length>1){
        throw "ERROR: solo se permite un caracter, reintentar función";
    }
    unaFrase = unaFrase.split("");
    for (let i=0;i<unaFrase.length;i++){
        if (unaFrase[i]==terminator){
            unaFrase.splice(i,1);
            i--
        }
    }
    unaFrase = unaFrase.join("");
    return unaFrase;
    }


/***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
* 1b. Al ingresar nueva persona, validar que no 
*     exista en la lista. Si existe, tirar
*     un error. (Usar funcion distinta para validar
*     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/
let datos = [];

// PUNTO 1B

const validar_datos = (nombre, correo) =>{


    for( i = 0; i < datos.length ; i++){

        let nombre_actual = datos[i][0];
        let correo_actual = datos[i][2];

        if (nombre_actual==nombre && correo_actual==correo) {
            
            throw "Usurpador de identidad" ; 
  
        }
    }
 }

 // PUNTO 1

 const datos_lista = () => {

    let persona=[];
    
    let nombre = prompt("Cual es tu nombre?");
    let edad = prompt("cual es tu edad?");
    let correo = prompt("cual es tu email?");

    validar_datos(nombre,correo);
    
    persona.push(nombre,edad,correo);
    console.log (persona);

    datos.push(persona);
    console.log (datos);

 }

 datos_lista(); 
 datos_lista(); 
 datos_lista(); 
 
// PUNTO 2

const ver_lista = () =>{

   return(datos);
}

ver_lista();

//normalmente se usa el termino GET ej getpersonas
//intenta no repetir siempre el codigo
// no reinventar la rueda: busca en google todas las soluciones, copy/paste

// PUNTO 3

const correo_acceso_persona = () => {

    let correo = prompt("cual es la direccion de mail de esa persona?");

    for( i = 0; i < datos.length ; i++){

        let correo_actual = datos[i][2];
        let nombre_actual = datos[i][0];

        if (correo_actual==correo) {
            
           alert(nombre_actual); 
  
        }
    }
}

correo_acceso_persona();

//varias formas de hacerlo
// en el punto 1b reutilizo este codigo en vez de repetir, reutilizacion de codigo


//PUNTO 4

const buscar_nombre =(buscar)=>{
    let caca = [];

    for( i = 0; i < datos.length ; i++){

        let nombre_actual = datos[i][0];


        if (nombre_actual.indexOf(buscar) != -1){

            caca.push(nombre_actual);
            // se puede usar return nombre_actual[i]

        }
    
    }
    console.log(caca);
    // y al final se usa return: false;
}

buscar_nombre("p");


// PUNTO 5

// 5. Hacer una función para borrar personas por mail.

// tengo que hacer dos variables que seleccionen mi sub array nombre y sub array correo
//tengo que poner un parametro para buscar el mail deseado
//tengo que buscar en base a toda la lista, por ende tengo que hacer un bucle
//adentro de ese bucle tengo que verificar lo que busco

const eliminar =(buscar)=>{

    for (let i=0; i < datos.length; i++){

        let nombre = datos [i][0];
        let correo = datos [i][2];

        if (correo.indexOf(buscar) != -1){

            correo.splice(nombre);
        }

    }
    console.log(datos);
}

eliminar ("paula@");
//tenes que sacar todo lo que conlleva a la persona, no solo el nombre


/* VARIAS FORMAS DE HACER

const deletePersonaByEmail = (email) => {

   let index =  personas.findIndex(persona)) =>{

    return persona [2] = email;
   });
   if (index >-1 ) {
   persona.splice(index,1);
   }
    devuelve un indice
}


 */

 //PUNTO 6 hecho x el profe
/*
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 
 * */

 // TODO ESTA EN EL GITHUB DEL PROFE



