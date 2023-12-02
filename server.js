require('dotenv').config()

const express = require("express")
const app=express()
const mongoose= require("mongoose")

mongoose.connect(process.env.database_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
const db=mongoose.connection
db.on('error',(error)=> console.error('Error connecting to the database:',error))
db.once('open', ()=> console.log("connected to database"))

app.use(express.json())

const productrouter = require('./routes/products');
app.use('/product',productrouter)

const PORT = process.env.PORT|| 3000
app.listen(PORT,() => console.log("server started!"))