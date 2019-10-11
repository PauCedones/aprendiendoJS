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