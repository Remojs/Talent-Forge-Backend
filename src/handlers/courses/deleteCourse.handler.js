const deleteCourse = require('../../controllers/courses/deleteCourse.controller');
const mongoose = require('mongoose')

const deleteCourseHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const courseDeleted = await deleteCourse(id)
        res.status(200).json(courseDeleted)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = deleteCourseHandler 