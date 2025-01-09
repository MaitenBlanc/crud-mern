const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://{usuario}:{contrasenia}@mern-crud-test.im14l.mongodb.net/');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexión correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')})

module.exports = mongoose
