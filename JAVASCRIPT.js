// Todos los ejercicios de JS en la clase de ADA

/*

VARIABLES:
Al programar necesitamos almacenar valores en la memoria de la computadora para poder interactuar con ellos

TIPOS:
*String: texto
*Number: numeros, nos permiten hacer operaciones matematicas
*Boolean: acepta valores del tipo true or false
*Undefined: nos avisa que el valor no esta definido
*Null: significa vacio, sin valor, cuando escribo typeof nos lo muestra como si fuera un objeto

TYPE OF:
Nos ayuda a saber de que tipo es cada variable
ej: 
let nombre = "Paula";
typeof nombre
**en la consola apareceria que es un string**



*/



/* EJERCICIO 1
 Hacer una frase personalizada preguntandole al usuario datos basicos
 */


// VARIABLES, PROMPT, CONCATENAR, ALERT

let nombre = prompt("¿Cual es tu nombre?");
let edad = prompt("¿Cuantos años tenes?");
let signo = prompt("¿De que signo sos?");
let trabajo = prompt("¿Cual es tu profesion?");


let total = "Mi nombre es " + nombre + " tengo " + edad + " años y soy del signo " + signo + " y me desempeño muy bien como" + trabajo;

alert (total);

// EJERCICIO HECHO POR MARY

let nombre = prompt("¡Hola! ¿cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let trabajo = prompt("¿Cuál es tu trabajo?");
let mascotas = prompt("¿Eres el humano de alguna mascota?");
let cantidadMascotas= prompt("De ser sí la respuesta anterior, ¿cuántas mascotas?");
edad = parseInt(edad);
cantidadMascotas = parseInt(cantidadMascotas);
let nacimiento = 2019 - edad;
let consejo = "Fly, you fools :gato:‍:dragón:";
alert (nombre + ", :bola_de_cristal: El oráculo sabe que naciste en " + nacimiento + ". Tu vida profesional gira en torno a " + trabajo + ", sin embargo que tengas " + cantidadMascotas + " mascota lo hace todo mejor. :mago::tono_de_piel-3: El consejo del mago es: " + consejo)


/*
ARRAYS:
Lista de datos variados que le puedo definir un monton de valores

ej:
var MyArray = [
    6,
    "muchas cositas",
    true,
];

Como accedo a un array?
 *A traves del nombre de la variable y la posicion de la lista donde este el elemento
ej
 MyArray [1];
rta--> "muchas cositas"

FUNCIONES MATEMATICAS

ej: SUMA
var A = 9
var B = 1
var C = A + B
console.log(C);
RTA--> 10

ej: MODULO --> devuelve el resto de la division

C = 7 % 3;
rta --> 1

OPERADOR DE INCREMENTO
var A = 1
A ++ ;
rta --> 3

OPERADOR DE DECREMENTO
var A = 5
A --;
rta --> 3

FORMA CORTA DE SUMAR Y/O RESTAR
Pensalo sacandole el igual del medio, es como decir a+3=

var A = 1
A+=3
rta --> 4

OPERADORES DE COMPARACION

SIMPLES: compara dos valores y saca una respuesta
ej
1 ==1
rta --> true
1==2
rta--> false
1!=2
rta--> false
1>2
rta--> false
1<2 
rta--> true

COERCION
Cuando tenemos un tipo de dato se puede transformar, tenemos la coercion implicita y explicita
ej
2=="2"
rta--> true --> esto no es igual porque uno es un numero y el otro un string

Para estar seguros hay que agregar un tercer igual
3===3
rta --> true
esto es una comparacion estricta para estar seguros de que es si o si el mismo valor

NEGACION: Se usa poniendo un signo de exclamacion antes ! 
ej
!true
rta--> false

tip--> cero es igual a false

COERCION EXPLICITA
ej
ParseInt("34,9")
rta--> 34
Pasamos de un string a un numero entero

paserfloat("34,9")
rta--> 34,9
Pasamos de un string a un numero con comas

*/


/*
EJERCICIO 2
Sacar el diametro y el area sabiendo que PI vale 3,14
*/


// VARIABLES, PROMPT, CONCATENAR, ALERT

const pi = 3.14;

let r = prompt("¿que radio es?");

r=parseFloat(r);

let area = "Mi area es "+ pi * (r*r);

alert(area);

let diametro = r+r;

let diametro2= "Mi diametro es " + diametro;

alert(diametro2);

/*
EJERCICIO
Hacer un texto de por lo menos tres palabras y que traiga la palabra del medio
*/

// OPCION 1 SUBSTRING

var texto = "Hola soy Paula"

texto.substring(5,8);

// OPCION 2 SLICE --> cuenta los espacios

"hola soy paula".slice(5,8);

// OPCION 3 SUBSTR --> no cuenta espacios, caracter de donde empieza y cantidad de caracteres despues

"hola soy paula".substr (5,3);

/*
CONVERTIR EN MAYUSCULAS O MINISCULAS

touppercase()--> convierte en mayus

tolowercase() --> convierte en minus

*/


//EJERCICIO

let pelo = prompt("¿Que largo de pelo tenes?");

if(pelo=="largo"){
alert("cortar");
}

else if (pelo=="medio"){
alert("cortar puntas");
}

else if (pelo=="corto"){
alert("rapar");
}

else {
    alert("estas pelaoooooooo");
}


//EJERCICIO
let contrasena;

do{
    contrasena =prompt("decime tu clave bancaria") ;
}
while (contrasena!="paulatarjeta")


let hacker=  `perdiste toda la platita gato, esta es tu contraseña ${contrasena}!`;
alert (hacker);

/* COMO HACERLO

1) Tenes que hacer que te siga preguntando la contraseña mientras la pongas mal
2) Para eso tenes que usar el DO WHILE porque ejecuta por pregunta
3) Acordate que las Ñ son fuertemente discriminadas, asi que te van a romper el codigo
4) a la variable no hace falta ponerle una informacion ya que eso va a ir en un prompt despues

Si tuviesemos que traducir lo que pusimos seria lo siguiente
"Preguntale al usuario cual es su clave, mientras su clave no sea "paulatarjeta" se seguira preguntando en loop hasta que acierte con la pass"

*/

//EJERCICIO
let pelo = prompt("¿Que largo de pelo tenes?");
let barba= confirm ("Tenes barba?");

pelo= pelo.toLocaleLowerCase();


if(pelo=="largo" && barba){
alert("corte y barba");
}

else if (pelo=="medio" && barba){
alert("cortar puntas y barbon");
}

else if (pelo=="corto" && barba){
alert("rapar y rapar barbaa");
}


else if(pelo=="largo"){
alert("cortar");
}

else if (pelo=="medio"){
alert("cortar puntas");
}

else if (pelo=="corto"){
alert("rapar");
}

else {
    alert("estas pelaoooooooo");
}


/* COMENTARIOS

1) Lo que aparece primero es lo que primero se ejecuta
2) si tenes mas de un IF tenes mas de una condicion, entonces se va a ejecutar una y despues la otra
3) si tenes ELSE IF se ejecuta SOLO esa condicion y no va a intentar hacer la condicion siguiente, ya se resolvio, encontro su paz interior jajajaj
4) Si por ejemplo no tenes barba, se van a ejecutar las condiciones de ELSE IF siguientes con respecto al pelo nada mas
5) Acordate de que el primero sea un IF porque sino te va a tirar error... ahi empieza la primera condicion, si pones otro IF despues tenes una segunda condicion, entendes Paula?!?!?!?!

*/


//EJERCICIO

let color =prompt ("Pone un color");

if(color =="rosa"){
alert("wii");
}

else if (color == "verde"){
alert("buu");
}

else{
    alert("feooo");
}



//EJERCICIO


let lista =[
    "puerta 1",
    "puerta 2",
    "puerta 3",
    "puerta 4",
    "puerta 5",
]

let verdadero = true

let abrir;

while(verdadero){
    abrir=prompt("que puerta es");
    for(let i=0; i<4; i++){
        if(abrir==lista [i]){
        verdadero=false;
        alert("pasaste")
    }
}
} 

//EJERCICIO

let nombres = [];

for (i=0; i<=5; i++){
    nombres [i] =prompt("Decime los nombres de tu familia");
    console.log=(nombres);
}
nombres{
    alert(nombres);
}

//ejercicio



/* EJERCICIO
1. Pedir un dia de la semana por prompt en texto (ej lunes)
2. Devolver el numero del dia (ej:2)
3.En caso de que el dia ingresado no existam tirar un error y agarrarlo e imprimirlo.
*/

/*1- hacer el prompt haciendo la pregunta*/
let dia = prompt("Que dia de la semana te gusta mas?");

/*2- haces que todo se escriba en minuscula*/
dia = dia.toLowerCase();


/* 3-Haces un try/catch adentro del switch para asegurar que se ejecute bien el codigo, 
mas alla de que este el default*/
try{

switch(dia){
    case "lunes":
        console.log(1);
        break;
    case  "martes":
        console.log(2);
        break;
    case "miercoles":
        console.log(3);
        break;
    case "miércoles":
    console.log(3);
        break;
    case "jueves":
        console.log(4);
        break;
    case "viernes":
        console.log(5);
        break;
    default:
       throw "error";
}
}
catch(err){
    console.warn(err);
}

/*ejemplo de finally */




throw 500;
finally{
    console.log("Proceso terminado en x segundos");
}

console.log("mensaje nuevo");




/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/


const saludo =()=>{
    let pregunta=prompt("cual es tu nombre?");
    alert(`hola ${pregunta}!`);
};

/* SALUDO YO TE ELIJO
TENES QUE INVOCAR LA FUNCION
SINO NO FUNCIONAAAAAAAAAAAAAAAAAAA*/

saludo(); 

/***********************************************
 *2)
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ***********************************************/

const cuadrado =()=>{
    let pregunta=prompt("Tirame un numero y te lo pondre al cuadrado");
    alert(Math.pow(pregunta,2));
};

cuadrado();


//3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/
/* fijate que lo ideal es poner const comida para que sea un array constante */
 let comida = [];

 const pedido =()=>{
    let pedir=prompt("que vas a ordenar?");
    comida.push(pedir);     

    //comida.push(prompt("que vas a ordernar")); otra forma de hacerlo
 }

 const ultimopedido=()=>{
    alert(comida[comida.length -1]);

 }

 const pedidocliente=()=>{
    for(i=0; i<comida.length; i++) {
    console.log(comida[i]);

    //forma mas facil pero no en renglones: console.log(comida);
        }
    }


 pedido();
 pedido();
 pedido();
 pedido();
 ultimopedido();
 pedidocliente();

// 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * Pista: Buscar como transformar los strings en arrays.
 * 
 ***********************************************/

let deletrear = (numero) => {
    numero=numero.toString();
    console.log(numero.split('').reverse().join(''));
}

deletrear(12345);

/* Otra forma de hacerlo:

const reverseNumber = (numberToReverse) => {

    numberToReverse =numberToReverse.toString()
                                    .split("")
                                    .reverse()
                                    .toString(); esta ultima parte sirve como cuando hicimos JOIN
    console.log(numberToReverse);
};

reverseNumber(12345678);

*/

//2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 *  
 ***********************************************/

const alfabeto = (palabra) => {

    palabra=palabra.split("").sort().join();
    console.log(palabra);
}

alfabeto ("paula");

// 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 *  
 ***********************************************/

 const mayusminus = (frase) => {
     frase=frase.replace(/\b\w/g, l => l.toUpperCase())

     console.log(frase);

 }

 mayusminus("esta frase tendria que tener mayusculas en la primera letra");


 //HAY UNA FORMA CON FOR QUE ES MAS CONVENCIONAL

  //4
/***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 *  
 ***********************************************/

 const buscarpalabramaslarga = (frase) => {

    frase= frase.split(" ");
    let palabralarga = "0" ;

    for (let i=0; i<frase.length; i++){
        if(frase[i].length>palabralarga.length){
            palabralarga=frase[i];
        }
    }
    console.log(palabralarga);
  

 };

 buscarpalabramaslarga("aca esta el super trambolicooooooooo");

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









