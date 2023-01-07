const express = require('express')
const app = express()

//Importar conexion a mongoDB
const archivoDb = require('./conexion')

//Importar del archivo de rutas y modelo de Usuario
const rutaUsuario = require('./rutas/usuario')

// Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('/api/usuario', rutaUsuario)


app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backed Node.js ... corriendo')
})

//configuracion de servidor
app.listen(5000, function () {
    console.log('El servidor de NODE esta corriendo correctamente')
})