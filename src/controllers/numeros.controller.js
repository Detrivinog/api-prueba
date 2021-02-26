const numerosCtrl = {}

numerosCtrl.getNumeros = (req, res) => {
    const numero = parseInt(req.body.numero);
    let perfectos = [6, 28, 496, 8128];
    let i = 8129;
    let contador = numero;

    while (contador > 4){
       let suma = 1;
       for(let j = 2; j < i; j++){
           if(i % j == 0){
               suma = suma + j
           } 
       }
       if (suma == i){
           perfectos.push(i);
           contador = contador - 1;
       } 
       i = i + 1;
    }
    
    res.json(perfectos.slice(0, numero));
}

module.exports = numerosCtrl;