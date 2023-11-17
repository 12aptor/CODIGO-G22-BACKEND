const categoryController = {}

const CategoryModel = require('../models/category.model')

categoryController.create = async (req,res)=>{
    try{
        const newCategory = new CategoryModel(req.body)
        await newCategory.save()
        res.status(201).json({
            status:true,
            content:newCategory
        })
    }catch(err){
        res.status(502).json({
            message:err
        })
    }
}

categoryController.getAll = async (req,res)=>{
    const categories = await CategoryModel.find()
    res.json({
        status:true,
        content:categories
    })
}

module.exports = categoryController