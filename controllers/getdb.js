import User from "../db/User.js";
export default function getDb() {
  User.insertMany([
    {
      name: "adzrs",
      age:18,
      favFood: ["favFood" , "favfoodTwo"]
    }
  ])
  User.create([
    {name: "the guy" , age: 7, favFood:['pizza' ,'ma9rouna']},
    {name: "adzr" , age: 18 , favFood:['apple watch', 'iphone nokia'] },
    {name: "admin" , age:0 ,favFood:['no' , 'yes']},
  ])
  User.find({name : "adzr"})
User.findOne({favFood: ["no" , "yes"]})
const id = "63d6802c657e907cba66360b"
User.findById(id , (err , done) => err ? console.error(err) : console.log(done))
User.findOneAndUpdate({name: "the guy"} , {$set :{ favFood: ['no' , 'yes' , 'hamburger']}})
User.findByIdAndRemove('63d6802c657e907cba66360a')
User.remove({name: "the guy"})
}
