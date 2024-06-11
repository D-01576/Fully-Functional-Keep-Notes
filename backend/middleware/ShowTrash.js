const { user } = require("../dB/user");

async function showtrash(req,res,next){
    const { email } = req.body;
    console.log(email)
    const userr = await user.findOne({email})

    const trash = userr.trash;
    console.log(trash)
        res.json({
            status: "success",
            trash: trash
        })
}

module.exports ={
    showtrash
}