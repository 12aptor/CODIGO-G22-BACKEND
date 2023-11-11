const express = require('express')

const app = express()

/************ MIDDLEWARES ***********/

//MIDDLEWARES DE APLICACIÓN
app.use(function(req,res,next){
    console.log("eso es un middleware")
    console.log("tipo de request : ",req.method)
    next()
})

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'ejemplo de middlewares'
    })
})

//MIDDLEWARES DE RUTA
app.use('/usuario',(req,res,next)=>{
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    console.log('ejecutado a las ',today.toISOString())
    next()
})

app.get('/usuario',(req,res)=>{
    res.json({
        nombre:'admin',
        email:'admin@gmail.com'
    })
})



app.listen(5000,()=>console.log('http://localhost:5000'))