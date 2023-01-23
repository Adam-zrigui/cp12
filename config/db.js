import mongoose from "mongoose";
mongoose.set("strictQuery" , true)
const connectDB = async () => {
try {
     mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser: true, 
        useUnifiedTopology: true
     })
     console.log("Connect database to Mongoose server")
} catch (error) {
    console.error(error)
}
}
export default connectDB;