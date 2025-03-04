//Se hace el arreglo con una lita de heroes
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

/*Bucle for tradicional, se usa para iterar sobre el arreglo heroes.
let i = 0: Inicializa el índice i en 0.
i < heroes.lenght: Condición para continuar el bucle mientras que i sea menos que la longitud del arreglo (heroes, que tiene la longitud de 4)
i++: incrementa el índice i en uno por cada iteración
console.log(heroes[i]): Imprime el elemento en la posición i del arreglo heroes
*/
console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}

/*Bucle for..in, se usa para íterar sobre las propiedades enumerables de un objeto o los índices de un arreglo
b */
console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
}



