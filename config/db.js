// project/config/db.js

const mongoose = require('mongoose');

const connectDb = async () => {
  const port= 'mongodb://localhost:27017/hackathon'
  const conn = await mongoose.connect(port, {
    useNewUrlParser: true, // parse mongodb connection strings 
    useCreateIndex: true, // enable indexes in mongoose schema 
    useFindAndModify: false, // enable query functions i.e. findOneAndUpdate()
    useUnifiedTopology: true // remove supports for serveral connection options
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDb;