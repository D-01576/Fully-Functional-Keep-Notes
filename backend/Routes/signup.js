const { Router } = require("express");
const { checkformat } = require("../middleware/checkformat");
const { createuser } = require("../middleware/signup");

const create = Router();


create.post("/signup",checkformat,createuser)

module.exports = create;