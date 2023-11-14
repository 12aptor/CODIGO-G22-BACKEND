const {Category,CategorySchema} = require('./category.models')

function setupModels(sequelize){
    Category.init(CategorySchema,Category.config(sequelize))
}

module.exports = setupModels