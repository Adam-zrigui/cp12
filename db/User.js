import mongoose from "mongoose"
const DeUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
 type: Number,
required: true,
min: 12,
max: 101
    },
    favFood: [String],  
})
const User =  mongoose.model("User" , DeUser)
export default User