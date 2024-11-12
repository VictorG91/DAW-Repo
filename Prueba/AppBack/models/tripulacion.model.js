const { model, Schema } = require('mongoose');

const tripulacionSchema = new Schema({
    nombre_tripulacion: String,
    capitan: String,
    numero_integrantes: Number,
    recompensa_total: Number,
    imagen: String
});

module.exports = model('tripulacion', tripulacionSchema);