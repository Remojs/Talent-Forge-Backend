const express = require("express");
const router = express.Router();

const createTeacherHandler = require("../handlers/teacher/createTeacher.handler");
const getAllTeachers = require("../handlers/teacher/getAllTeachers.handler");
const teacherByIdHandler = require("../handlers/teacher/teachersById.handler");
const teacherByNameHandler = require("../handlers/teacher/teachersByName.handler");
const editTeacherHandler = require("../handlers/teacher/editTeacher.handler");
const deleteTeacher = require("../handlers/teacher/deleteTeacher.handler");
const teacherCoursesHandler = require("../handlers/teacher/teacherCourses.handler");

router.post("/", createTeacherHandler);
router.get("/", getAllTeachers);
router.get("/:id", teacherByIdHandler);
router.get("/name/:name", teacherByNameHandler);
router.get("/courses/:id", teacherCoursesHandler);
router.put("/edit/:id", editTeacherHandler);
router.delete("/delete/:id", deleteTeacher);

module.exports = router;
