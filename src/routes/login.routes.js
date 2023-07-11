const express = require("express");
const router = express.Router();
const loginHandler = require('../handlers/login/login.handler')

router.post('/', loginHandler)


module.exports = router;