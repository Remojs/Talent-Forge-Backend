const loginController = require('../../controllers/login/login.controller')
const jwt = require('jsonwebtoken');

const loginHandler = async(req, res) => {
    try {
        const { username, password } = req.body;
        const logged = await loginController(username, password)
        const decodedToken = jwt.decode(logged)
        res.status(200).json(decodedToken)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = loginHandler
