const { user } = require("../dB/user");

async function shownote(req,res,next){
    const { email } = req.body;
    console.log(email)
    const userr = await user.findOne({email})

    const notes = userr.notes;
    console.log(notes)
        res.json({
            status: "success",
            notes: notes
        })
}

module.exports ={
    shownote
}