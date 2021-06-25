const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describa: 'Muestra la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'son los numeros que se va a multipliplicar con la base de la tabla de multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv;

    module.exports = argv