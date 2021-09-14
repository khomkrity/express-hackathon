// project/app.js

const express = require('express');
const connectDb = require('./config/db');


// connect to the database
connectDb();

// Route file
const courses = require('./routes/courses');

// init express
const app = express();
const port = 3000;

// Body parser
app.use(express.json());


// Mount router
app.use('/courses', courses);


// listen on a port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});