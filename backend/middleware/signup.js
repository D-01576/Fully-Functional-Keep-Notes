const { user } = require("../dB/user");
const jwt = require("jsonwebtoken")
const secret  = "keeps"

async function createuser(req,res,next){
    const {email,password} = req.body;
    const userr = await user.findOne({email})
    if(userr){
        res.json({
            status:"Error",
            message: "user already exist"
        })
        return
    }
    const newuser = new user({
        email,
        password
    })
    await newuser.save();
    const token = jwt.sign({email},secret);
    res.json({
        status : "Success",
        token : token
    })
}

module.exports = {
    createuser
}