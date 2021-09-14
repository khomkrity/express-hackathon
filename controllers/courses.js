// project/controllers/courses.js

// model
const Course = require('../models/Course');

// get courses from the database
exports.getCourses = async (req, res, next) => {
  const course = await Course.find({});
  res.status(200).json({success: true, data: course});
};

// get a course by id 
exports.getCourse = async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Course.findById(courseId);
  res.status(200).json({success: true, data: course}); 
};

// create a course 
exports.createCourse = async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({success: true, data: course});
};

// update a course
exports.updateCourse = async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Course.findByIdAndUpdate(courseId, req.body, {new: true, runValidators: true});
  res.status(200).json({success: true, data: course});
};

// delete a course by id
exports.deleteCourse = async (req, res, next) => {
  const courseId = req.params.id
  const course = await Course.findById(courseId);
  if(!course){
    res.status(404).json({ success: false, error: 'course not found' });
  }
  course.remove();
  res.status(200).json({ success: true, data: {} });
};