const { default: mongoose } = require("mongoose")

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/bdCsv')

const objetobd = mongoose.connection


objetobd.on('connected', () => { console.log('conexion correcta a la base de datos') })
objetobd.on('error', () => { console.log('error en la conexion a la base de datos') })

module.exports = mongoose
