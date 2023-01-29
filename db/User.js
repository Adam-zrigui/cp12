import mongoose from "mongoose"
const DeUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
  age : Number,
    favFood: [String],  
})
const User =  mongoose.model("User" , DeUser)
export default User