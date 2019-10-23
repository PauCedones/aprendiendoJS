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

