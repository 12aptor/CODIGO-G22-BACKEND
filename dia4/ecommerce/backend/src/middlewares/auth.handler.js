const jwt = require('jsonwebtoken')
const {config} = require('../config')

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization']
    console.log('bearer token :',bearerToken)
    if(typeof bearerToken !== 'undefined'){
        return next()
    }
    else{
        res.status(403).json({
            message:' no se encontro token'
        })
    }
}
module.exports = {verifyToken}