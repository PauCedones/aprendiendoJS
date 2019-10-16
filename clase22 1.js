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

*/

