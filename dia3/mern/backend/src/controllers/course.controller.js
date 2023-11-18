const courseController = {}
const courseModel = require('../models/course.model')

courseController.create = async (req,res)=>{
    try{
        const newCourse = new courseModel(req.body)
        await newCourse.save()
        res.json({
            status:true,
            content:newCourse
        })
    }catch(err){
        res.status(502).json({
            status:false,
            content:err
        })
    }
}

module.exports = courseController