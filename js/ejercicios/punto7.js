/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto
 es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de
 dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede 
almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado 
o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas
 de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
class Agenda {
  constructor(tamaño) {
    this.tamaño = tamaño || 10;
    this.contactos = [];
  }
  añadirContacto(contacto) {
    if (this.contactos.length === this.tamañoMaximo) {
      console.log("no más contactos");
      return;
    }
    this.contactos.push(contacto);
  }
  existeContacto(nombre) {
    const coincidencia = this.contactos.find((item) => {
      return item.nombre.toLowerCase() === nombre;
    });
    if (coincidencia) {
      console.log("existe el contacto");
    } else {
      console.log("no se existe el contacto");
    }
  }
  ListarContacto() {
    this.contactos.forEach((item) => {
      console.log(`${item.nombre}: ${item.telefono}`);
    });
  }
  buscarContacto(nombre) {
    const contacto = this.contactos.find((item) => {
      return item.nombre.toLowerCase() === nombre;
    });
if(!contacto){
console.log('No existe conctacto buscado');
} else {
    console.log(`${contacto.nombre}: ${contacto.telefono}`);
}
  }
  agendaLlena(){
    if (this.contactos.length === this.tamañoMaximo){
        console.log("La agenda está llena");  
 } else {
    console.log("Se pueden agregar mas contactos")
 } 
}
huecosLibres(){
  if(this.contactos.length != this.tamañoMaximo){

  const huecos= this.tamañoMaximo-this.contactos.length ;
      console.log(`La agenda tiene ${huecos} huecos libres`);
  } else {
      console.log("La agenda esta llena elimina un contacto");
  }
} 
  eliminarContacto(){
    if (this.contactos.length === this.tamañoMaximo){
        this.contactos.shift();
 console.log(`El primer contacto fue eliminado`)
    } else {
       console.log("No se elimino ningun contacto")
   }
}  
}

const jorge = new Contacto("Jorge", 1234);
const marta = new Contacto("Marta", 1234);
const agenda = new Agenda();

console.log(agenda);

agenda.añadirContacto(jorge);
agenda.añadirContacto(marta);

console.log(agenda);

agenda.existeContacto("Jorge");
agenda.buscarContacto("marta");
agenda.agendaLlena();
agenda.huecosLibres();
agenda.eliminarContacto();
