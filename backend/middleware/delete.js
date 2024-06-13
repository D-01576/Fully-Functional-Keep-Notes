const { user } = require("../dB/user");

async function Delete(req,res,next){
    const {id ,email} = req.body;
    const userr = await user.findOne({email});
    const index = userr.notes.findIndex(note => note._id.equals(id));
    const note = userr.notes[index];
    if(!note){
        return res.status(404).json({
            status:"Error",
            message:"Note index id incorrect note not found"
        });
    }
    const removeDate = new Date();
    removeDate.setDate(removeDate.getDate() + 7);
    const result = await user.updateOne(
        { email: email },
        { $pull: { notes: { _id: id } } ,
         $push: { trash : {id : id, title : note.title, text : note.text, removetime: removeDate}}}
    );
    if (result.nModified === 0) {
        return res.status(404).json({
            status:"Error",
            message:"Note index id incorrect note not found"
        });
    }
    res.json({
        status: "success",
        message: "Moved to trash"
    })
    next()
}

module.exports = {
    Delete
}