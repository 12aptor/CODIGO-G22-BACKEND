require('dotenv').config()

const config =  {
    port:process.env.PORT || '5000',
    mongoUri: process.env.MONGOURI || 'mongodb://127.0.0.1:27017/db_cursos_g22',
    jwt_secret: process.env.JWT_SECRET || 'qwerty123',
    mscourses:{
        port:process.env.MSCOURSES_PORT || '5001'
    },
    msauth:{
        port:process.env.MSAUTH_PORT || '5002'
    }
}

module.exports = {config}