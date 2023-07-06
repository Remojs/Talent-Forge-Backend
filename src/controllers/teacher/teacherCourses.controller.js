const teacherSchema = require('../../db/models/teacher.model');
const mongoose = require('mongoose');

const teacherCourses = async (id) => {
  try{ 
    const teacher = await teacherSchema.findById(id)
    const courses = teacher.courses
    return courses
  } catch (error) {
      console.log(error.message) 
  }
};


module.exports = teacherCourses;
