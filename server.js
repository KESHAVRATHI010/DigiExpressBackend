require('dotenv').config()

const express = require("express")
const app=express()
const cors =require("cors")
const mongoose= require("mongoose")

mongoose.connect(process.env.database_url,{
    useNewUrlParser: true
  });
const db=mongoose.connection
db.on('error',(error)=> console.error('Error connecting to the database:',error))
db.once('open', ()=> console.log("connected to database"))

app.use(express.json());

app.use(express.json())

const productrouter = require('./routes/products');
app.use('/product',productrouter)

const PORT = process.env.PORT|| 3000

app.use(cors())

app.listen(PORT,() => console.log("server started!"))