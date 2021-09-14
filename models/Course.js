// project/models/Course.js

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    year: String,
    courseCode: {
      type: String,
      unique: true
    }
  }
);

module.exports = mongoose.model('Course', CourseSchema);