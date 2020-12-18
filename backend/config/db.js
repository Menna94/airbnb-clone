import mongoose from 'mongoose'


const DBConnection = async() =>{
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/listingsLogic',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (err){
        console.log(`Error in DB Connection ${err.message}`);
        process.exit(1)
    }
}

export default DBConnection;