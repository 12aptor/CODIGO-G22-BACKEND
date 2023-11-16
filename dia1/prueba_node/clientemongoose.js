const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/db_codigo_g22')

    const AlumnoSchema = new mongoose.Schema({
        nombre:String,
        email:String,
        nota:Number
    })

    const Alumno = mongoose.model('alumnos',AlumnoSchema)

    const listaAlumnos = await Alumno.find()
    console.log(listaAlumnos)
}

main()