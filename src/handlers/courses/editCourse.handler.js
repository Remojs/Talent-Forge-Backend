const editCourse = require('../../controllers/courses/editCourse.controller')
const mongoose = require('mongoose')

const editCourseHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const {title, cathegory, theme, link, teacher, description, image, duration, rating, prize, disabled} = req.body
        const courseUpdated = await editCourse(id, title, cathegory, theme, link, teacher, description, image, duration, rating, prize, disabled)
        res.status(200).json(courseUpdated)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = editCourseHandler