const { Router } = require('express');
const router = Router();

const { getPares } = require('../controllers/digitos.controller')

router.route('/')
    .get(getPares)

module.exports = router; 