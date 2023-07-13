const userSchema = require('../../db/models/user.model');
const jwt = require('jsonwebtoken');

const loginController = async (username, password) => {
        const user = await userSchema.findOne({ username: username });
        if (!user) throw new Error('Incorrect Username');
        if (password === user.password) {
            const token = jwt.sign({
                userId: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                country: user.country,
                password: user.password,
                description: user.description,
                profileImage: user.profileImage,
                accountType: user.accountType 
            },'secretKey');
            
            return  token;
        } else {
            throw new Error('Incorrect Password');
        }

};

module.exports = loginController;