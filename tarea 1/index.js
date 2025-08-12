// index.js
const Alumno = require('./Alumno');

// Creamos un alumno
const alumno1 = new Alumno('Juan', 'Pérez', 20, 'Ingeniería en Sistemas');

// Probando métodos
console.log("📚 Carrera:", alumno1.obtenerCarrera());
console.log("🧑‍🎓 Datos:", alumno1.obtenerDatos());
console.log("🎂 Edad inicial:", alumno1.retornarEdad());

// Modificar edad
alumno1.modificarEdad(21);
console.log("🎂 Edad modificada:", alumno1.retornarEdad());

// Agregar materias
alumno1.agregarMateria("Programación I");
alumno1.agregarMateria("Matemática");
alumno1.agregarMateria("Base de Datos");

// Mostrar materias
console.log("📖 Materias:");
alumno1.mostrarMaterias();
