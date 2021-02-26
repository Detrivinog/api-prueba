const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// midelewares
app.use(cors());
app.use(express.json());


// routes
app.use('/api/tarjeta', require('./routes/tarjeta'));
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/numeros', require('./routes/numeros'));
app.use('/api/digitos', require('./routes/digitos'));

module.exports = app;
