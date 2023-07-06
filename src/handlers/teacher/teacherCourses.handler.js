const teacherCourses = require('../../controllers/teacher/teacherCourses.controller');
const mongoose = require('mongoose');

const teacherCoursesHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const teacherCourse = await teacherCourses(id);
    res.status(200).json(teacherCourse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = teacherCoursesHandler;
