const express = require("express");
const router = express.Router();

const createCourseHandler = require('../handlers/courses/createCourse.handler')
const getAllCoursesHandler = require('../handlers/courses/getAllCourses.handler')
const getCourseByIdHandler = require('../handlers/courses/getCourseByID.handler')
const getCourseByNameHandler = require('../handlers/courses/getCourseByName.handler')
const editCourseHandler = require('../handlers/courses/editCourse.handler')
const deleteCourseHandler = require('../handlers/courses/deleteCourse.handler')
const addRatingHandler = require('../handlers/courses/addRating.handler')
const commentCourseHandler = require('../handlers/courses/commentCourse.handler')

router.post('/', createCourseHandler)
router.get('/', getAllCoursesHandler)
router.get('/:id', getCourseByIdHandler)
router.get('/name/:title', getCourseByNameHandler)
router.put('/comment/:id', commentCourseHandler)
router.put('/edit/:id', editCourseHandler)
router.put('/rating/:id', addRatingHandler)
router.delete('/delete/:id', deleteCourseHandler)



module.exports = router;