const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async(base=5,boolean,hasta)=>{
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida +=(`${base} x ${i} = ${base * i}\n`);
        }
        boolean
            ?console.log(colors.red(salida))
            :console.log();
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida)
        return `Tabla-${base}-de-1-hasta-${hasta}.txt`;
    } catch (error) {
        throw error;
    }
}
module.exports={
    crearArchivo
}