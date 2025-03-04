
//Arreglo carros con una lista de marcas
const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0; 

//Arreglo que itera sobre carros, e imprime cada elemento hasta que i sea igual a la longitud del arreglo
// while( i < carros.length ) {
//     console.log( carros[i] );
//     i++;
// }


//El bucle while continua mientras carros [i] sea verdadero, es decir, mientras haya un elemento en la posición i del arreglo carros
console.warn('While')
// undefined
// null
// false
while( carros[i] ) {
    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    
    console.log( carros[i] );
    i++;
}


console.warn('Do While');
let j = 10;

do {
    console.log( carros[j]);
    j++;
} while( carros[j] );

/* 
Bucle while:

Itera sobre el arreglo carros mientras haya elementos en la posición i.
Usa continue para saltar una iteración específica (cuando i es 1).

Bucle do...while:
Intenta iterar sobre el arreglo carros comenzando desde un índice 10, lo que resulta 
en una única iteración porque carros[10] es undefined.
*/

