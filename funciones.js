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