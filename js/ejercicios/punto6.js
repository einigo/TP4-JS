/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro 
con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro {
    constructor (isbn, titulo, autor, numeroDePaginas) {
     this.isbn = isbn;
     this.titulo = titulo;
     this.autor = autor;
     this.numeroDePaginas = numeroDePaginas;   
    }
    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} paginas`);
    }
}
const sinceramente = new Libro (123,'sinceramente','La drona',150);

const Libertad = new Libro (666,'Libertar Libertad','Javier Milei',200);

sinceramente.mostrarLibro()
Libertad.mostrarLibro()

if (sinceramente.numeroDePaginas > Libertad.numeroDePaginas){
    console.log(`El libro con más paginas es ${sinceramente}`)
} else if (sinceramente.numeroDePaginas < Libertad.numeroDePaginas) {
    console.log ('El libro con más paginas es Liberta Libertad')
} else {
    console.log('Ambos son iguales');
}
