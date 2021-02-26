const empleadosCtrl = {}

const Empleados = require('../models/EmpleadosDB');

empleadosCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleados.find();
    res.json(empleados)
}

empleadosCtrl.createEmpleados = async (req, res) => {
    const { empleado, departamento } = req.body;
    const salario = parseInt(req.body.salario);
    const participacion = parseFloat(req.body.participacion);
    

    const newEmpleado = new Empleado({
        empleado,
        departamento,
        salario,
        participacion
    })

    await newEmpleado.save();
    res.json({message: 'Empleados guardado'})
}

empleadosCtrl.getEmpleado = async (req, res) => {
    const empleado =  await Empleado.findOne(req.params.Empleado);
    res.json(empleado)
}

empleadosCtrl.updateEmpleado = async (req, res) => {
    const { empleado, departamento, salario, participacion} = req.body;
    await Empleado.findOneAndUpdate(req.params.Empleado, {
        empleado,
        departamento,
        salario,
        participacion
    })
    res.json({message: 'Empleado actualizado'})
}

empleadosCtrl.deleteEmpleado = async (req, res) => {
    await Empleado.findOneAndDelete(req.params.Empleado);
    res.json({message: "Empleado eliminado"})
}

module.exports = empleadosCtrl;