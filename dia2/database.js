const mysql2 = require('mysql2')

const mysqlConnection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'db_tareas_g22',
    port:'3306'
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err)
        
    }else{
        console.log('conectado a bd')
    }
})

module.exports = mysqlConnection