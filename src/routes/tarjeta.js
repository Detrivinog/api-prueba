const { Router } = require('express');
const router = Router();

const { getValidacion } = require('../controllers/tarjeta.controller')

router.route('/')
    .get(getValidacion)

module.exports = router; 