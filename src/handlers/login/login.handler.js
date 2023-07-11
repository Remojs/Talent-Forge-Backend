const loginController = require('../../controllers/login/login.controller')

const loginHandler = async(req, res) => {
    try {
        const { username, password } = req.body;
        const logged = await loginController(username, password)
        res.status(200).json(logged)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = loginHandler