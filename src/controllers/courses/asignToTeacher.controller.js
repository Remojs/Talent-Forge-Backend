const teacherSchema = require("../../db/models/teacher.model");
const mongoose = require("mongoose");

const assignToTeacher = (inputData, teacherId) => {
	try {
		const assignedCourses = teacherSchema.findByIdAndUpdate(
            { _id: teacherId },
            {
              $push: { courses: inputData },
            },
            { new: true }
          );
          return assignedCourses;
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = assignToTeacher;
