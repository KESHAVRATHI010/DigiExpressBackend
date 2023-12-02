// uploadData.js
const mongoose = require('mongoose');
require('dotenv').config();
const Electronics = require('./models/product'); // Adjust the path based on your project structure

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('Error connecting to the database:', error));
db.once('open', () => console.log('Connected to database'));


async function uploadLaptops() {
  try {
    await Electronics.insertMany(laptops);
    console.log('Laptops uploaded successfully.');
  } catch (error) {
    console.error('Error uploading laptops:', error);
  } finally {
    mongoose.disconnect();
  }
}

uploadLaptops();
