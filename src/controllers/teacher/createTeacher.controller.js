const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const createTeacher = async (name, dateOfBirth, email, password, country, description, profileImage) => {
    try {
        const teacher = await teacherSchema({
            name,
            email,
            password,
            dateOfBirth,
            country,
            description: description || 'Talent forge teacher',
            profileImage: profileImage || 'null',
        });

        teacher.save()

        return teacher
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = createTeacher