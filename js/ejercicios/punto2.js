/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la 
descripción del estado de la cuenta. */

class Cuenta {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    ingresar(cantidad) {
        this.saldo = cantidad;
        console.log(`Se han ingresado ${cantidad} unidades. Saldo actual: ${this.saldo}`);
    }

    extraer(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo = cantidad;
            console.log(`Se han retirado ${cantidad} unidades. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar la extracción.");
        }
    }

    informar() {
        return `Titular: ${this.titular} Saldo actual: ${this.saldo}`;
    }
}

const cuentaAlex = new Cuenta("Alex");

console.log("Descripción inicial de la cuenta:");
console.log(cuentaAlex.informar());

cuentaAlex.ingresar(100);

cuentaAlex.extraer(50);

console.log("Descripción actualizada de la cuenta:");
console.log(cuentaAlex.informar());

