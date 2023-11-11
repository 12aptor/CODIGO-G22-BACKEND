const express = require('express')

const app = express()

/************ MIDDLEWARES ***********/
app.use(function(req,res,next){
    console.log("eso es un middleware")
    console.log("tipo de request : ",req.method)
    next()
})


/************* RUTAS  ***************/
app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'ejemplo de middlewares'
    })
})

app.listen(5000,()=>console.log('http://localhost:5000'))