const { Router } = require('express');
const router = Router();

const { getEmpleados, createEmpleados, getEmpleado, deleteEmpleado, updateEmpleado } = require('../controllers/empleados.controller');

router.route('/')
    .get(getEmpleados)
    .post(createEmpleados);

router.route('/Empleado')
    .get(getEmpleado)
    .put(updateEmpleado)
    .delete(deleteEmpleado);

module.exports = router; 