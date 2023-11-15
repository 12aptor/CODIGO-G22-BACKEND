const {Model,DataTypes,Sequelize} = require('sequelize')

const TABLE_NAME = 'tbl_category'

//schema
const CategorySchema = {
    id:{
        field:'id',
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        field:'name',
        allowNull:false,
        type:DataTypes.STRING
    }
}
//model
class Category extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName:TABLE_NAME,
            modelName:'Category',
            timestamps:false
        }
    }
}

module.exports = {TABLE_NAME,CategorySchema,Category}