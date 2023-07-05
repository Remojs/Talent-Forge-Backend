const teacherCourses = require('../../controllers/teacher/teacherCourses');
const mongoose = require('mongoose');

const teacherCoursesHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const allTeachers = await teacherCourses(id);
    res.status(200).json(allTeachers);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = teacherCoursesHandler;
