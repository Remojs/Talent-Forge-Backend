const commentCourse = require('../../controllers/courses/commentCourse.controller')
const mongoose = require('mongoose')

const commentCourseHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const {comment, image, name} = req.body
        const newComment = {
            comment,
            image,
            name
        }
        console.log(newComment)
        const successComment = await commentCourse(id, newComment)
        res.status(200).json(successComment)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = commentCourseHandler