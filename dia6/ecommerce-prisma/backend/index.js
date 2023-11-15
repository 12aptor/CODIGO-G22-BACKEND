const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'api rest con prisma'
    })
})

app.listen(5000,()=>console.log('http://localhost:5000'))