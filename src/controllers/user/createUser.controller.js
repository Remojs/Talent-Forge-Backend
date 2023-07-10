const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const createUser = async (fullName, username, dateOfBirth, email, password, country, description, profileImage, interactions, accountType) => {
    try {
        const user = await userSchema({
            fullName, 
            username,
            email,
            password,
            dateOfBirth,
            country,
            accountType: accountType || 'user',
            description: description || 'Talent forge user',
            profileImage: profileImage || 'null',
            interactions: interactions || {
                friends:[],
                savedCourses:[],
                puchasedCourses:[],
                posts:[]
            }
        });

        user.save()
 
        return user
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = createUser