

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

//Se define un arreglo con 3 elementos (Cada juego es un elemento)
let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];

//Imprime el objeto videojuegos, debido a que tengo { videojuegos } también imprime esa palabra, pero sino tuviera {} solo imprime los n juegos que tenga
console.log({ videoJuegos });

//Imprime solo el primer elemento del arreglo videojuegos
console.log( videoJuegos[0] );

//Definición de un arreglo con diferentes tipos de datos
let arregloCosas = [
    true,              //Booleano (BOOL)
    123,               //Número (INT)
    'Fernando',        //Cadena de texto (STRING)
    1 + 2,             //
    function(){},      //Función anónima
    ()=>{},            //Función flecha
    { a: 1 },          //Objeto
    ['X', 'Megaman', 'Zero', 'Dr. Light', [     //Arreglo anidado
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({ arregloCosas });
// console.log( arregloCosas[2] );
// Imprime el segundo elemento del quinto arreglo anidado dentro de arregloCosas
console.log( arregloCosas[7][4][1] );
