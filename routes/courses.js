// project/routes/courses.js

// express
const express = require('express');

// API function
// Object Destructuring
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');

// express router
const router = express.Router();

router
  .route('/')
  .get(getCourses)
  .post(createCourse);

router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;