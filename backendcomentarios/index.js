const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const comentarioRouter = require('./routes/comentarioRouter');
const app = express(); //Creamos el servidor
conectarDB(); // estableciendo conexión con la base de datos MongoDB


app.use(express.json());
app.use(cors());
app.use('/api/comentarios', comentarioRouter)


// el puerto que va a escuchar
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})

