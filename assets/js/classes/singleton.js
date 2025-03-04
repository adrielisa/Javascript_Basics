/*Un singleton es un patrón de diseño que asegura que ina clase tenga solo una instancia y proporciona 
un punto de acceso global a esa instancia

En este código:

La clase Singleton tiene una propiedad estática instancia que almacena la única instancia de la clase.

El constructor verifica si ya existe una instancia. Si existe, retorna esa instancia en lugar de crear una nueva.
Cuando se crean múltiples instancias de Singleton, todas ellas referencian la misma instancia, asegurando que 
solo haya una instancia de la clase en todo el programa.

Este patrón es útil cuando necesitas asegurarte de que solo haya una instancia de una clase en todo el sistema, 
como en el caso de una conexión a una base de datos o un manejador de configuración.
*/

class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor(nombre = '') {

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);

