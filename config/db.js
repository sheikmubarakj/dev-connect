const mongoose = require('mongoose')
const config = require('config')


const db = "mongodb+srv://Arjun:Arjun123@devconnecter.rykoi.mongodb.net/<dbname>?retryWrites=true&w=majority" 
// config.get("mongoURI")


const connectDB = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log("MongoDB connected....")
    }catch(e){
        console.error(e)
        process.exit(1)
    }
}


module.exports = connectDB;