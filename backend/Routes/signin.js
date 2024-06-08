const { Router } = require("express");
const { checkformat } = require("../middleware/checkformat");
const { signinuser } = require("../middleware/signin");

const log = Router();

log.post("/signin", checkformat,signinuser)


module.exports = log;