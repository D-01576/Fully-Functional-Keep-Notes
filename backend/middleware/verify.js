const { user } = require("../dB/user");
const jwt = require("jsonwebtoken")
const secret = "keeps"

async function verify(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: "Token is missing" });
    }

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: "Token invalid" });
        }
        const email = decoded.email;
        try {
            const userr = await user.findOne({ email: email });
            if (userr) {
                req.body.email = email;
                next();
            } else {
                return res.status(403).json({ status: "User not found" });
            }
        } catch (error) {
            return res.status(500).json({ status: "Internal Server Error" });
        }
    });
}

module.exports = {
    verify
}
