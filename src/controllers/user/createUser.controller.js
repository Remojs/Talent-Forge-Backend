const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const createUser = async (name, dateOfBirth, email, password, country, description, profileImage, interactions) => {
    try {
        const user = await userSchema({
            name,
            email,
            password,
            dateOfBirth,
            country,
            description: description || 'Talent forge user',
            profileImage: profileImage || 'null',
            interactions: interactions || {
                friends:['dont have friends...'],
                savedCourses:['dont have courses...'],
                posts:['dont have posts...']
            }
        });

        user.save()
 
        return user
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = createUser