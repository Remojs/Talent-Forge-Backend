const getbyCoursesID = require('../../controllers/courses/getCourseByID.controller')
const mongoose = require('mongoose')

const getCourseByIdHandler = async(req, res) => {
    try {
        const {id} = req.params
        const allCourses = await getbyCoursesID(id)
        res.status(200).json(allCourses)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getCourseByIdHandler
