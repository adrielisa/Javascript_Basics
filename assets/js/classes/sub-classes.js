class Persona {

    static _conteo = 0;         // Cuenta el número de instancias de la clase Persona
    static get conteo() {       // Método estático que devuelve el conteo de instancias
        return Persona._conteo + ' instancias';
    }

    static mensaje() {          // Método estático que imprime un mensaje en consola
        console.log( this.nombre ); // undefined, porque 'this' se refiere a la clase, no a una instancia
        console.log('Hola a todos, soy un método estático');
    }

    // Propiedades de instancia que se inicializan con el constructor
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    // Constructor que inicializa las propiedades de instancia con valores proporcionados o por defecto
    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++; // Incrementa el valor estático _conteo cada vez que se crea una nueva instancia de Persona
    }

    // Setter que establece la propiedad comida en mayúsculas
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    // Getter que devuelve un mensaje con la comida favorita de la persona
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    // Método de instancia que imprime un mensaje con el nombre y el código de la persona
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    // Método de instancia que llama a quienSoy() y luego imprime la frase de la persona
    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

class Heroe extends Persona { 
    
    clan = 'sin clan'; // Propiedad de instancia específica de la clase Heroe

    // Constructor que inicializa las propiedades de instancia y llama al constructor de la clase base
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase); // Llama al constructor de la clase base Persona

        this.clan = 'Los Avengers'; // Inicializa la propiedad clan
    }

    // Método de instancia que sobrescribe quienSoy() de la clase base
    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy(); // Llama al método quienSoy() de la clase base
    }

}

// Crear una instancia de Heroe
const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
// const spiderman = new Heroe();

console.log( spiderman ); // Imprime la instancia spiderman
spiderman.quienSoy(); // Llama al método quienSoy() de la instancia spiderman





