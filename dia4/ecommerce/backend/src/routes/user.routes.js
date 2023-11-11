const express = require('express')
const UserService = require('../services/user.service')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')


function userApi(app){
    const router = express.Router()
    app.use('/user',router)

    const objUser = new UserService()

    router.post('/',async function(req,res){
        const {body:data} = req
        try{
            const newData = await objUser.create({data})
            res.status(201).json(newData)
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.post('/login',async function(req,res){
        const {body:data} = req

        const auth = await objUser.authenticate({data})
        console.log(auth)
        if(auth.id > 0){
            const token = jwt.sign(
                auth,
                'qwerty123',
                {
                  expiresIn:'1m'
                }
            )
            res.status(200).json({
                'token':token
            })
        }else{
            res.status(401).json({
                message:'datos invalidos'
            })
        }
    })
}

module.exports = userApi