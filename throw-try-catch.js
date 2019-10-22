

/* EJERCICIO
1. Pedir un dia de la semana por prompt en texto (ej lunes)
2. Devolver el numero del dia (ej:2)
3.En caso de que el dia ingresado no existam tirar un error y agarrarlo e imprimirlo.
*/


let dia = prompt("Que dia de la semana te gusta mas?");

dia = dia.toLowerCase();

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
    console.log(err);
}
