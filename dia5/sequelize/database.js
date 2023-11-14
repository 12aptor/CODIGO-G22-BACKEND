const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : './db.sqlite'
})

sequelize.authenticate()
.then(()=>console.log('conectado a la base de datos'))
.catch(err=>console.log("error : " + err))

//modelos
const Tarea = sequelize.define(
    'tarea',
    {
        descripcion:Sequelize.STRING,
        estado:Sequelize.STRING
    }
)

sequelize.sync()
.then(()=>{
    console.log("tabla creada")
    Tarea.bulkCreate(
        [
            {descripcion:'tarea uno',estado:'pendiente'},
            {descripcion:'tarea dos',estado:'terminado'}
        ]
    )
})