const {MongoClient} = require("mongodb")

const client = new MongoClient('mongodb+srv://admin:180403069@mydb.hujlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const start = async ()=>{

    try{

        await client.connect()
        console.log("Database Connected")

        await client.db().createCollection("users")

        const users = client.db().collection('users')

        await users.insertOne({name:"Salih",age:40})
    }
    catch(error){
        console.log(error)
    }
}

start()