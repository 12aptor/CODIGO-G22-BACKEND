const express = require('express')
const app = express()
app.use(express.json())

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

app.post('/categories',async(req,res)=>{
    const newData = await prisma.tbl_category.create({
        data:req.body
    })
    res.json(newData)
})

app.get('/categories/:id',async(req,res)=>{
    const data = await prisma.tbl_category.findUnique({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(data)
})

app.put('/categories/:id',async(req,res)=>{
    const data = await prisma.tbl_category.update({
        where:{
            id:parseInt(req.params.id)
        },
        data:req.body
    })
    res.json(data)
})

app.listen(5000,()=>console.log('http://localhost:5000'))