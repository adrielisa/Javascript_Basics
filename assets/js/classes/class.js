/* Aquí se crea una clase Persona

La clase persona tiene propiedades estáticas (_conteo) y métodos estáticos ( conteo, mensaje ).
También tiene propiedades de instancia (nombre, código, frase, comida)

El constructor inicializa las propiedades de instancia y aumenta el conteo de instancias.
Tiene un setter y un getter
Tiene un método de instancia (quienSoy, miFrase)

Se crean 2 instancias de Persona: spiderman y ironman
Se llama al método miFrase de spiderman
Se establece la comid favorita de spiderman
Se imprime el conteo de instanias y otros mensajes
Se añade y se imprime una nueva propiedad a la clase Persona

Este código muestra como definir y utilizar una clase en JavaScript, incluyendo propiedades y métodos estáticos, propiedades de instancia,
métodos de acceso (getters y setters), y como crear y manupular instancias de la clase.
*/

class Persona {

    static _conteo = 0;             //Esto es una propiedad estática que cuenta el número de instancias de la clase persona
    static get conteo() {           //Un método estático que imprime el mensaje en la consola. Los métodos estáticos no pueden acceder a las propiedades de una instancia directamente
        return Persona._conteo + ' instancias';     
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos, soy un método stático');
    }

    //Proiedades de instancia que se inicializan con el constructor
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    //Inicializa las propiedades declaradas anteriormente con valores por defecto sino se proporcionan
    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++; //Incrementa el valor estático _conteo cada vez que se crea una nueva instancia de Persona
    } 

    //Este es un setter que establece la propieda comida en mayúsculas
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    //Un getter que devuelve un mensaje con la comida favorita de la persona
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    //Imprime un mensaje con el nombre y el código de la persona
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    //Llama al método quienSoy() y luego imprime la frase de la persona
    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}


//Crea un instancia de persna para spiderman y Ironman
const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

//Llama al método miFrase() de la instancia spiderman, que imprime la identidad y la frase de spiderman
spiderman.miFrase();
// ironman.miFrase();

//Establece la comida favorita de Spiderman
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log( spiderman.getComidaFavorita );

// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );