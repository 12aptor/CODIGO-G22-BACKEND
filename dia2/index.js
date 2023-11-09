const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1><center>Mi primer servidor con express</center></h1>')
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

app.listen(5000,()=>console.log('servidor en http://localhost:5000'))