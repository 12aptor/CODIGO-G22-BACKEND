const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
   title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255
   },
   img:{
        type:String,
        required:false
   },
   description:{
        type:String,
        required:false
   },
   teacher:{
        type:String,
        required:true
   },
   duration:{
        type:Number,
        required:false
   },
   price:{
        type:Number,
        required:true
   }
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model('courses',CourseSchema)