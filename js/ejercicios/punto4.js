/*4- Escribe una clase Producto para crear objetos. Estos objetos, 
deben presentar las propiedades código, nombre y precio, además 
del método imprime datos, el cual escribe por pantalla los valores 
de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla 
los valores de los tres objetos instanciados. */

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}
const productos = [
    new Producto("1", "Producto A", 100),
    new Producto("2", "Producto B", 200),
    new Producto("3", "Producto C", 300)
];
function imprimirProducto(producto) {
    producto.imprimeDatos();
}
productos.forEach(imprimirProducto);
