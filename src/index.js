const express = require("express")
const morgan = require("morgan")
const router = require("./routes/index.routes.js")
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 9000

//MIDDLEWARES
app.use(express.json())
app.use(morgan("dev"))
app.use("/", router)
app.listen(PORT, () => console.log(`listen on port ${PORT}`))

//MONGODB CONNECTION
require('./db/index.db.js');

module.exports = app

