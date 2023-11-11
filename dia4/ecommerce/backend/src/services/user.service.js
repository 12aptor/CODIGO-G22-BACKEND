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

    async authenticate({data}){
        const userNotFound = {
            id:0,
            username:null
        }
        try{
            const query = `select id,username,password
                           from tbl_user where username = ${data.username}`

            const result = await this.db.querySql(query)
            if(await bcrypt.compare(data.password,result[0].password)){
                const userFound = {
                    id:result[0].id,
                    username:data.username
                }
                return userFound
            }else{
               return userNotFound
            }
        }catch(err){
              return userNotFound
        }
    }
}

module.exports = UserService