const digitosCtrl = {}

digitosCtrl.getPares = (req, res) => {
    const numero = parseInt(req.body.numero);
    let suma = 0;
    
    (numero % 2 == 0) ? suma = suma + 1 : suma = suma;
    (Math.floor(numero/1E4) % 2 == 0) ? suma = suma + 1 : suma = suma;
    (Math.floor(numero/1E3) % 2 == 0) ? suma = suma + 1 : suma = suma;
    (Math.floor(numero/100) % 2 == 0) ? suma = suma + 1 : suma = suma;
    (Math.floor(numero/10) % 2 == 0) ? suma = suma + 1 : suma = suma;

    res.json({pares: suma})
}

module.exports = digitosCtrl;