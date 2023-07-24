const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const commentCourse = async (id, comment) => {
    try{ 
        comment = await courseSchema.updateOne({_id: id}, {$push: {comments: comment}})
        return comment
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = commentCourse