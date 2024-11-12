const mongoose = require('mongoose');

const PirataSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tripulacion: String,
    capitan: Boolean,
    recompensa: Number,
    habilidad: String,
    fruta_del_diablo: String,
    descripcion: String
});

module.exports = mongoose.model('Pirata', PirataSchema);






