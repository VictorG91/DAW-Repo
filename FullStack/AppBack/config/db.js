const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(error => console.error('Error de conexión a MongoDB:', error));

module.exports = mongoose;
