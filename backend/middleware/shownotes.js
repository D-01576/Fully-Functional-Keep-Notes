const { user } = require("../dB/user");

async function shownote(req,res,next){
    const { email } = req.body;
    const userr = await user.findOne({email})

    const notes = userr.notes;
        res.json({
            status: "success",
            notes: notes
        })
}

module.exports ={
    shownote
}