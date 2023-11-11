const express = require('express')
const {config} = require('./config')
const boom = require('@hapi/boom')

const categoryApi = require('./routes/category.routes')
const userApi = require('./routes/user.routes')

//middlewares
const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler')

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    try{
        //console.log(a + 3)
        res.json({
            'status':true,
            'message':'api rest version 1.0'
        })
    }catch(err){
        res.status(500).json(boom.badData('error : ' + err.message))
    }
})

categoryApi(app)
userApi(app)

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(config.port,()=>console.log('http://localhost:'+config.port))