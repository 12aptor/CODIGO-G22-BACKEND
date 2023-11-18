const userController = {}

const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')

userController.create = async (req,res)=>{
    try{
        const hash = await bcrypt.hash(req.body.password,10)
        req.body.password = hash
        const newUser = new userModel(req.body)
        await newUser.save()
        res.json({
            'id':newUser.id,
            'email':newUser.email
        })
    }catch(err){
        res.status(500).json({
            message:err
        })
    }
}