// Requireds
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'abc';

crearArchivo(base).then((archivo) => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));