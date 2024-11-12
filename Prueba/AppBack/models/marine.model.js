const { model, Schema } = require('mongoose');

const marineSchema = new Schema({
    nombre: String,
    descripcion: String,
    fruta_del_diablo: String,
    habilidad: String,
    imagen: String
});

module.exports = model('marine', marineSchema);