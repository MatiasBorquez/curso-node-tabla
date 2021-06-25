//manejador de archivos
const {crearArchivo} = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();
/*
const [,,arg3 = 'base = 5']=process.argv;
const [ ,base=5]=arg3.split('=');*/
console.log(argv);



//const base = 3;
crearArchivo(argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
    .catch(err => console.log(err));