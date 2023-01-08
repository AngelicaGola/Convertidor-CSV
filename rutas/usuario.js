

const express = require('express')
const csvParser = require('csv-parser')
const { Readable } = require('stream')


const router = express.Router()
router.use(express.json())

const mongoose = require('mongoose')
module.exports = router

//Agregar Archivos
router.post('/agregararchivo', (req, res) => {
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

// Obtener nombre de los archivos
router.get('/obtenerarchivos', (req, res) => {
    mongoose.connection.db.listCollections().toArray((error, collections) => {
        if (error) {
            console.error(error);
            return;
        }
        const collectionNames = collections.map(collection => collection.name);
        res.send(collectionNames);
    })
})

// obtener datos de archivo csv
router.get('/obtenerarchivo', (req, res) => {
    const { name } = req.query;
    const collection = mongoose.connection.collection(name)
    collection.findOne((error, document) => {
        if (error) {
            console.error(error)
        } else {
            const fields = Object.keys(document)
            const schema = {}
            fields.forEach((field) => {
                schema[field] = mongoose.Schema.Types.Mixed
            })
            // console.log(schema)


            // console.log(name);
            const collection = mongoose.model(name, schema, name)

            collection.find({}, (error, documents) => {

                if (error) {
                    console.error(error);
                    return res.status(500).send(error);
                }

                res.send(documents);
            })

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
