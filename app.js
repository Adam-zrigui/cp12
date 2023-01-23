import express from 'express'
import * as dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './db/User.js'
dotenv.config({path: './config/.env'})
const app = express()
connectDB()
User.insertMany([
    {
        name: 'John',
        age: 30,
        favFood: ['no','yes']
    },
    {
        name: 'Joh',
        age: 30,
        favFood: ['no','yes']
    },
    {
        name: 'Jo',
        age: 30,
        favFood: ['no','yes']
    },
    {
        name: 'Joe',
        age: 30,
        favFood: ['no','yes']
    },
    {
        name: 'Jo',
        age: 30,
        favFood: ['no','yes']
    },
])
console.log(User.findOne({age : 30}))
const PORT = process.env.PORT || 8000 
app.listen(PORT , (err) => err ? console.error(err) : console.log("server listening on port " + PORT))