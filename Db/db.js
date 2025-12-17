//connectivity between express and mongodb
import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connectDb=()=>{
    try{
       
        //'mongodb://127.0.0.1:27017/todo'
        mongoose.connect(process.env.MONGODB_URI)
        console.log("db has been connected")
    }
    catch(err){
        console.error(err)
    }
}
export default connectDb