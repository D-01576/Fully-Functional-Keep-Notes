const zod = require("zod");
const { user } = require("../dB/user");
async function addnote(req,res,next){
    const {email, title, text} = req.body;
    const process = zod.object({
        text: zod.string()
    })

    const response = process.safeParse({text:text})
    if(!response.success){
        res.json({
            status: "Error",
            message: "Not full filled"
        })
        return
    }
    
    const userr = await user.findOne({email: email});
    const id = userr.notes.length + 1;
    await userr.updateOne({ $push: { notes: { id: id, title: title, text: text} } });

    res.json({
        status: "Success",
        message: "Added"
    })
}

module.exports ={
    addnote
}