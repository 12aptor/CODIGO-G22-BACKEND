const express = require('express')
const app = express()

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'api rest con prisma'
    })
})

app.get('/categories',async(req,res)=>{
    const data = await prisma.tbl_category.findMany()
    res.json(data)
})

app.listen(5000,()=>console.log('http://localhost:5000'))