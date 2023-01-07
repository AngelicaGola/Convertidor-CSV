const express = require('express')
const csvParser = require('csv-parser')
const { Readable } = require('stream')


const router = express.Router()
router.use(express.json())

const mongoose = require('mongoose')
module.exports = router

//Agregar Usuario
router.post('/agregarusuario', (req, res) => {
    const csvDatos = []

    // convertir el body de la respuesta a string
    const csvStream = new Readable();
    const csvFileName = req.body.csvFilename

    csvStream.push(req.body.csvString);

    // console.log(req.body);
    csvStream.push(null);


    csvStream
        .pipe(csvParser())
        .on('data', row => {
            csvDatos.push(row)
        })
        .on('end', () => {
            // obtener los headers de la primera fila del csv
            console.log(Object.keys(csvDatos[0]));
            const headers = Object.keys(csvDatos[0])
            // crear un esquema dinamico utilizando los headers
            const csvSchema = mongoose.Schema(
                headers.reduce((schema, header) => {
                    schema[header] = String
                    return schema
                }, {})
            )
            const Csv = mongoose.model(csvFileName, csvSchema, csvFileName)
            csvDatos.forEach(data => {
                const csv = new Csv(data)
                csv.save((err, csv) => {
                    if (err) return console.error(err)
                    console.log('csv guardado: ${csv.name}')
                })
            });
            res.send({ message: 'success a MongDB' })

        });


});

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
