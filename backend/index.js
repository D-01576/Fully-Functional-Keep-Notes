const express = require("express")
const signin = require("./Routes/signin")
const signup = require("./Routes/signup")
const home = require("./Routes/Home")
const cors = require("cors")
// const bodyparser = require("body-parser")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/",signin)
app.use("/",signup)
app.use("/home",home)

app.listen(3000)