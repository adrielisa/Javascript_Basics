let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];   // Definición de un arreglo de juegos con cuatro elementos
console.log('Largo: ', juegos.length );                 //Imprime la logitud del arreglo juegos con  .lenght


let primero = juegos[ 2 - 2 ];                         // 2-2 = 0, por lo que imprime el índice 0 que es Zelda       
let último  = juegos[ juegos.length - 1 ];             //Lenght cuenta la cantidad de elementos del arreglo (4) pero como un arreglo siempre empieza en 0, lenght - 1 mostrará el último valor del arreglo

console.log({ primero, último });

//Recorre el arreglo juegos e imprime cada elemento, su indice y el arreglo completo
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//Agrega un nuevo elemento al final del arreglo (push) y obtiene la nueva longitud
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

//Agrega un nuevo elemento al inico del arreglo (unshift) y obtiene la nueva longitud
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//Elimina el último elemento del arreglo y lo guarda en la variable juegoBorrado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

//
let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2); //Sintáxis de splice:   array.splice(posición de donde se empieza a eliminar, cantidad de elementos a eliminar)
console.log({ juegosBorrados, juegos });

//Se usa para buscar el índice de un elemento en un arreglo
let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });


//TODO: Referencia






