const createCourse = require('../../controllers/courses/createCourses.controller')
const mongoose = require('mongoose')

const createCourseHandler = async(req, res) => {
    try {
        const {title, cathegory, theme, link, teacher, description, interactions, image, duration, rating, prize} = req.body;
        const createdCourse = await createCourse(title, cathegory, theme, link, teacher, description, interactions, image, duration, rating, prize)
        res.status(200).json(createdCourse)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = createCourseHandler