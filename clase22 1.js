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

