const express = require('express')
const {config} = require('../../config')
const cors = require('cors')

require('../../libs/mongoose.lib')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'ms-auth active'
    })
})

app.use('/user',require('../../routes/user.route'))

app.listen(config.msauth.port,function(){
    console.log(`ms auth : http://localhost:${config.msauth.port}`)
})