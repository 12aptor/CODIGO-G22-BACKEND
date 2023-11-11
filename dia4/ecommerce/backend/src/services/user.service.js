const MysqlLib = require('../lib/mysql')
const bcrypt = require('bcryptjs')

class UserService{

    constructor(){
        this.db = new MysqlLib()
    }

    async getLast(){
        const query = 'select id,username from tbl_user order by id desc limit 1'
        const result = await this.db.querySql(query)
        return result[0]
    }

    async create({data}){
        const passwordHash = await bcrypt.hash(data.password,10)

        const query = `insert into tbl_user(username,password)
                       values('${data.username}','${passwordHash}')`

        await this.db.querySql(query)
        const result = await this.getLast()
        return result
    }
}

module.exports = UserService