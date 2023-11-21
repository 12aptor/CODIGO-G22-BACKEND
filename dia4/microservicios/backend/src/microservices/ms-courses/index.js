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
        'content':'ms-courses active'
    })
})

//routes
app.use('/categories',require('../../routes/category.route'))
app.use('/course',require('../../routes/course.route'))

app.listen(config.mscourses.port,function(){
    console.log(`ms courses : http://localhost:${config.mscourses.port}`)
})