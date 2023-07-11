const userSchema = require('../../db/models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = async (username, password) => {
    try {
        const user = await userSchema.findOne({ username: username });

        if (!user) throw new Error('Credenciales inválidas');

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) throw new Error('Contraseña incorrecta');

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
        
        return { token };

    } catch (error) {
        throw new Error('Error en el servidor');
    }
};

module.exports = loginController;