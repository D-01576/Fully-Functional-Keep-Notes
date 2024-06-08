const { user } = require("../dB/user");
const jwt = require("jsonwebtoken");
const secret = "keeps";

async function signinuser(req, res, next) {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.json({
            status: "Error",
            message: "Input not provided"
        });
    }
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
        return res.json({
            status: "Error",
            message: "User does not exist"
        });
    }

    if (foundUser.password !== password) {
        return res.json({
            status: "Error",
            message: "Incorrect email or password"
        });
    }
    const token = jwt.sign({ email }, secret);
    res.json({
        status: "Success",
        token: token
    });
}

module.exports = {
    signinuser
};
