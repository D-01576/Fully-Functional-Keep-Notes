const {Router} = require("express");
const {verify } = require("../middleware/verify");
const { addnote } = require("../middleware/Addnote");
const { Delete } = require("../middleware/delete");
const { removetrash } = require("../middleware/addshedule");
const { shownote } = require("../middleware/shownotes");

const home  = Router();

home.post("/addnote",verify,addnote)
home.post("/delete",verify,Delete,removetrash)
home.get("/notes",verify,shownote)

module.exports = home