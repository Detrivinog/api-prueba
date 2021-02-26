const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({
    empleado: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    departamento: {
        type: String,
        required: true,
    },

    salario: {
        type: Number,
        required: true,
    },

    participacion: {
        type: Number,
        required: true,
    },
})

module.exports = model('Empleados', empleadoSchema);