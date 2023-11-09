const express = require('express')
const mysqlConnection = require('./database')

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1><center>Mi primer servidor con express.js</center></h1>')
})

app.post('/tarea',(req,res)=>{
    const {descripcion,estado} = req.body
    const query = `insert into tarea(descripcion,estado)
                   values('${descripcion}','${estado}')`

    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'registro exitoso'
            })
        }else{
            console.log(err)
        }
    })
})

app.get('/tarea',(req,res)=>{
    mysqlConnection.query('select * from tarea',(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':rows
            })
        }else{
            console.log(err)
        }
    })
})




app.get('/json',(req,res)=>{
    res.json({
        'status':true,
        'content':'primer api rest con express'
    })
})

app.get('/saludo',(req,res)=>{
    let nombre = req.query.nombre
    res.send('<h1>Hola ' + nombre + '</h1>')
})

app.get('/suma/:n1/:n2',(req,res)=>{
    const {n1,n2} = req.params
    let suma = parseInt(n1) + parseInt(n2)
    res.send(`<h1>la suma de ${n1} + ${n2}  es ${suma}</h1>`)
})

app.listen(5000,()=>console.log('servidor en http://localhost:5000'))