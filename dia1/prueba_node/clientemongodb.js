const {MongoClient} = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

async function main(){
    await client.connect()
    console.log('conectado a mongodb')

    const db = client.db('db_codigo_g22')
    const collection = db.collection('alumnos')

    const result = await collection.find().toArray()
    console.log('alumnos : ',result)
    return 0
}

main()