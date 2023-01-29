import express from 'express'
import * as dotenv from 'dotenv'
import connectDB from './config/db.js'

import getDb from './controllers/getdb.js'
dotenv.config({path: './config/.env'})
const app = express()
connectDB()
getDb()
const PORT = process.env.PORT || 8000 
app.listen(PORT , (err) => err ? console.error(err) : console.log("server listening on port " + PORT))