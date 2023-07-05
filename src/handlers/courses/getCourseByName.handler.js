const getCoursebyName = require('../../controllers/courses/getCourseByName.controller')
const mongoose = require('mongoose')

const courseByNameHandler = async(req, res) => {
    try {
        const { title } = req.params
        console.log(title)
        const allCourses = await getCoursebyName(title)
        res.status(200).json(allCourses)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = courseByNameHandler 