const MysqlLib = require('../lib/mysql')

class CategoryService{

    constructor(){
        this.db = new MysqlLib()
    }

    async getAll(){
        const query = "select id,name from tbl_category"
        const result = await this.db.querySql(query)
        return result
    }

    async create({data}){
        const queryCreate = `insert into tbl_category(name)
                       values('${data.name}')`

        await this.db.querySql(queryCreate)
        const queryLast = `select id,name from tbl_category
                           order by id desc limit 1`
        const result = await this.db.querySql(queryLast)
        return result
    }
}

module.exports = CategoryService