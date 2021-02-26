const { Router } = require('express');
const router = Router();

const { getNumeros } = require('../controllers/numeros.controller')

router.route('/')
    .get(getNumeros)

module.exports = router; 