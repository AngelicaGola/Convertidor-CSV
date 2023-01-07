const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaUsuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('Usuarios', eschemaUsuario)
module.exports = router

// Ruta de prueba
// router.get('/ejemplo', (req, res) => {
//     res.end('Saludo carga desde ruta ejemplo')
// })

//Agregar Usuario
router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevoUsuario.save(function (err) {
        if (!err) {
            res.send('Usuario agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

// Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

// obtener data de usuario
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({ idusuario: req.body.idusuario }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Actualizar Usuario
router.post('/actulizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({ idusuario: req.body.idusuario }, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,

    }, (err) => {
        if (!err) {
            res.send('Usuario actualizado correctamente')
        } else {
            res.send(err)
        }

    })
})

//Borrar Usuario
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario }, (err) => {
        if (!err) {
            res.send('Usuario borrado correctamente')
        } else {
            res.send(err)
        }

    })
})