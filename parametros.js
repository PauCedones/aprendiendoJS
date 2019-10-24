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

 buscarpalabramaslarga("aca esta el super trambolicooooooooo");l