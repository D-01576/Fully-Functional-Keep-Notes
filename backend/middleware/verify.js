const { Console } = require("console");
const { user } = require("../dB/user");
const jwt = require("jsonwebtoken")
const secret  = "keeps"

async function verify(req,res,next){
    const token = req.headers.authorization;
    let email;
    console.log(token)
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            res.status(403).json({ status: "token invalid" });
            return;
        }
        email = decoded.email;
    });
    console.log(email)
    const userr = await user.findOne({email: email});
    if(userr){
        req.body.email = email;
        next()
    }
    else {
        res.status(403).json({ status: "token invalid" });
    }
}
module.exports = {
    verify
}