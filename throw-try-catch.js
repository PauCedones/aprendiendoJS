

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

