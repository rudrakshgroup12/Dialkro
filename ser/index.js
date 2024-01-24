import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({path:'./config/config.env'})
import cnD from './config/db.js';
import cookieParser from 'cookie-parser'
cnD();
const app=express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())



import userRoutes from './routes/userRoutes.js';
import BusnessRoutes from './routes/businessRoutes.js'
app.use('/api',userRoutes)
app.use('/api',BusnessRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`) 
})