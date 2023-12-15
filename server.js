require('dotenv').config()

const express = require("express")
const app=express()
const cors =require("cors")
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const mongoose= require("mongoose")

mongoose.connect(process.env.database_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const db=mongoose.connection
db.on('error',(error)=> console.error('Error connecting to the database:',error))
db.once('open', ()=> console.log("connected to database"))

app.use(cors())

app.use(express.json());

const productrouter = require('./routes/products');
app.use('/product',productrouter)

const PORT = process.env.PORT|| 3001

app.listen(PORT,() => console.log("server started!"))