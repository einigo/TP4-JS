/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las 
propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar 
sus propiedades, calcular el perímetro y el área */

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    cambiarAlto(nuevoAlto) {
        this.alto = nuevoAlto;
    }
    cambiarAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
    }
    mostrarPropiedades() {
        console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
    }
    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }
    calcularArea() {
        return (this.alto * this.ancho);
    }
}
const miRectangulo = new Rectangulo(5, 10);

miRectangulo.mostrarPropiedades();

miRectangulo.cambiarAlto(7);
miRectangulo.cambiarAncho(12);

miRectangulo.mostrarPropiedades();

// Calcula y mouestra el perímetro y el área del rectángulo
console.log(`Perímetro: ${miRectangulo.calcularPerimetro()}`);
console.log(`Área: ${miRectangulo.calcularArea()}`);
