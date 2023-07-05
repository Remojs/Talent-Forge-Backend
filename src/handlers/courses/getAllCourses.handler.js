const getAllCourses = require('../../controllers/courses/getAllCourses.controller')
const mongoose = require('mongoose')

const allCoursesHandler = async(req, res) => {
    try {
        const allCourses = await getAllCourses()
        res.status(200).json(allCourses)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allCoursesHandler