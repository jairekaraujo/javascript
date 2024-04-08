
const libro = {
  titulo: "",
  autor: "",
  genero: "",
  anio: "",
  editorial: "",
}

const libro1 = {
  titulo: "",
  autor: "",
  genero: "",
  anio: "",
  editorial: "",
}

const libro2 = {
  titulo: "",
  autor: "",
  genero: "",
  anio: "",
  editorial: "",
}
  
 const Books = Object.create(libro);
  libro.titulo = "La guerra de los mundos";
  libro.autor = "Albert Nozaki";
  libro.genero = "Ciencia Fiscion";
  libro.ano = 1983;
  libro.editorial = "Barré Lyndon";
  
  const books1 = Object.create(libro);
  libro1.titulo = "Eloquent javascrip";
  libro1.autor = "Marjin Haverbeke";
  libro1.genero = "study";
  libro1.ano = 2018;
  libro1.editorial = "Third Edition";
  
  const books3 = Object.create(libro);
  libro2.titulo = "python";
  libro2.autor = "Marco Buttu";
  libro2.genero = "study";
  libro2.ano = 2020;
  libro2.editorial = "anaya";


  console.log("\n", Books.titulo, "\n", Books.autor, "\n", Books.genero, "\n", Books.ano, "\n", Books.editorial);
