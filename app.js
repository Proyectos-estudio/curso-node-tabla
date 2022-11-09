const { crearArchivo } = require("./helpers/multiplicar");
const {argv} = require("./config/yargs");
const { colors } = require("./config/yargs");

console.clear();

const base = argv.b;
const listar = argv.l;
const hasta = argv.h

// let base = 2;

crearArchivo(base, listar, hasta)
.then((nombreArchivo) => console.log(colors.magenta(nombreArchivo, "creado")))
.catch((err) => console.log(err));


// // extraer data de la consola
// const [ , , arg3 ='base=5' ] = process.argv;
// const [, base = '5'] = arg3.split('=')