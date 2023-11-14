const express = require('express')
const {sequelize,Tarea} = require('./database')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'todolist api rest con sequelize'
    })
})

app.listen(5000,()=>console.log('servidor activo en http://localhost:5000'))