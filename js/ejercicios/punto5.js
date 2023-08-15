/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y 
altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni || this.generaDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        let generacion = "";
        if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
            generacion = "Baby Boomer";
        } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
            generacion = "Generación X";
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1996) {
            generacion = "Millennials";
        } else if (this.añoNacimiento >= 1997) {
            generacion = "Generación Z";
        }

        console.log(`Generación: ${generacion}`);
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} cm\nAño de Nacimiento: ${this.anoNacimiento}`;
    }

    generarDNI() {
        const dni = Math.floor(Math.random() * 100000000);
        return dni.toString().padStart(8, "0");
    }
}

// Crear una instancia de Persona
const persona1 = new Persona("Juan", 25, "12345678", "H", 70, 175, 1998);

// Mostrar información de la persona
console.log(persona1.mostrarDatos());

// Mostrar generación a la que pertenece la persona
persona1.mostrarGeneracion();

// Verificar si la persona es mayor de edad
if (persona1.esMayorDeEdad()) {
    console.log("La persona es mayor de edad.");
} else {
    console.log("La persona no es mayor de edad.");
}

