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