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

app.get('/tarea',(req,res)=>{
    Tarea.findAll()
    .then(function(result){
        res.json({
            status:true,
            content:result
        })
    })
})

app.post('/tarea',(req,res)=>{
    Tarea.create(
        {
            descripcion:req.body.descripcion,
            estado : req.body.estado
        }
    ).then((result)=>{
        res.json({
            status:true,
            content:result
        })
    })
})

app.listen(5000,()=>console.log('servidor activo en http://localhost:5000'))