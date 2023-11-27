const mongoose = require("mongoose");

const nominaShemas = mongoose.Schema({
    nombre: {
        type: String,
        required: true
      },
      apellido: {
        type: String,
        required: true
      },
      foto: String,
      correo: {
        type: String,
        required: true
      },
      direccion: String,
      cargo: {
        type: String,
        required: true
      },
      salario: {
        type: Number,
        required: true
      }

});

module.exports = mongoose.model('nominas',nominaShemas);