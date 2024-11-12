const { model, Schema } = require('mongoose');

const pirataSchema = new Schema({
    nombre: String,
    edad: Number,
    tripulacion: String,
    capitan: Boolean,
    recompensa: Number,
    habilidad: String,
    fruta_del_diablo: String,
    descripcion: String,
    imagen: String
});

module.exports = model('pirata', pirataSchema);