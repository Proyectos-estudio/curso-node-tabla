const fileSystem = require("fs");
const { colors } = require("../config/yargs");

const crearArchivo = async (base = 5, listar, hasta =10) => {
  let salida,consola = "";

  for (let index = 1; index <= hasta; index++) {
    salida += `${base}`+ ' * ' + ` ${index} ` + '=' +` ${base * index} \n`;
    consola += `${base}`+ colors.red(' * ') + ` ${index} ` + colors.blue('=') +` ${base * index} \n`;
  }
  if (listar) {
    console.clear();
    console.log("===========================");
    console.log(`  TABLA DEL ${base}:`);
    console.log("===========================");
    console.log(consola);
  }
  
  fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida); // Para capturar un error con esta forma hay que usar un tryCatch
  return `tabla-${base}.txt`;
};

module.exports = {
  crearArchivo,
};

//   fileSystem.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log("El archivo ha sido creado");
//   });