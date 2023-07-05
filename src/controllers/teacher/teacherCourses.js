const teacherSchema = require('../../db/models/teacher.model');
const mongoose = require('mongoose');

const teacherCourses = async (courses) => {
  try {
    teacher = teacherSchema.findCourses(courses);
    return teacher;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = teacherCourses;
