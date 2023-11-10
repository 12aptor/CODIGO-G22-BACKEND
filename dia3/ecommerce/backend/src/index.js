const express = require('express')
const {config} = require('./config')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'message':'api rest version 1.0'
    })
})

app.listen(config.port,()=>console.log('http://localhost:'+config.port))