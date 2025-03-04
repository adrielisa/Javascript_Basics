class Persona {

    //Método estático que permite crear una instancia de Persona a partir de un objeto que contiene las propiedades dadas usando destructuración
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    //Constructor que inicializa las propiedades de instancia con los valores proporcionados como argumento
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    //Método de instancia que imprime la informaciión de la persona 
    getInfo() {
        console.log(`info: nombre: ${this.nombre}, apellido: ${this.apellido}, país: ${this.pais}`);
    }
}

//Definición por variables
const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

//Definición por objeto
const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);


persona1.getInfo();
persona2.getInfo();



