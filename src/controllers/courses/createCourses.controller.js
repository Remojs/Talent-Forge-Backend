const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const createCourse = async (title, cathegory, theme, link, teacher, description, interactions, image) => {
    try {
        const course = await courseSchema({
            title,
            cathegory,
            theme,
            link,
            teacher,
            image, 
            description: description || 'Course',
            interactions: interactions || {
                comments:['0 comments'],
                likes:0,
                saves:0
            }
        });

        course.save()

        return course
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = createCourse