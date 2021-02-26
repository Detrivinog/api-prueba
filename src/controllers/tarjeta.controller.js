const { response } = require("../app");

const tarjetaCtrl = {}

tarjetaCtrl.getValidacion = (req, res) => {

    const numero = parseInt(req.body.numero);
    const fecha = parseInt(req.body.fecha);    

    const length = (number) => Math.log(number) * Math.LOG10E + 1 | 0;

    const validacion = (numero, fecha) => {
        if (numero == null || fecha == null){
            return false
        } else if (typeof numero != 'number' || typeof fecha != 'number'){
            return false
        } else if (length(numero) != 16 || length(fecha) != 2){
            return false
        } else if (fecha < 21 || fecha > 25){
            return false
        } else if ((Math.floor(numero/1E15) == 4)){
            return true
        } else if ((Math.floor(numero/1E14) == 13 ) || (Math.floor(numero/1E14) == 16)){
            return true
        } else {
            return false
        }
    }

    res.json({
        validacion: validacion(numero, fecha),
    });
}

module.exports = tarjetaCtrl;

