const express = require('express')
var morgan = require('morgan')

const app = express()

/************ MIDDLEWARES ***********/
app.use(express.static('public'))

app.use(morgan('combined'))
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
    //console.log(a + 3)
    res.json({
        nombre:'admin',
        email:'admin@gmail.com'
    })
})

//MIDDLEWARES DE ERRORES
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).json({
        'message':'ocurrio un error inesperado'
    })
})

app.listen(5000,()=>console.log('http://localhost:5000'))