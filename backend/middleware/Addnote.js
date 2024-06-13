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
    console.log(userr.notes.length)
    await userr.updateOne({ $push: { notes: {title: title, text: text} } });
    const newdetail = await user.findOne({email: email});
    const id = newdetail.notes[newdetail.notes.length-1]._id;
    console.log(id)

    res.json({
        status: "Success",
        message: "Added",
        id: id
    })
}

module.exports ={
    addnote
}