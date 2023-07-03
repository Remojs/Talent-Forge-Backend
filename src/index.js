const express = require("express")
const morgan = require("morgan")
const app = express() // Cambiar el nombre de la variable 'server' a 'app'
const router = require("./routes/index.js")
const PORT = 3001

app.use(express.json())
app.use(morgan("dev"))
app.use("/", router)
app.listen(PORT, () => console.log(`listen on port ${PORT}`))

module.exports = app

