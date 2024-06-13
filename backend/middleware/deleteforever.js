const { user } = require("../dB/user");

async function Deleteforever(req,res,next){
    console.log("yes")
    const {id ,email} = req.body;
    console.log(id)
    const userr = await user.findOne({email});
    const index = userr.trash.findIndex(trash => trash.id === id);
     console.log(index)
    const trash = userr.trash[index];
    if(!trash){
        return res.status(404).json({
            status:"Error",
            message:"trash index id incorrect trash not found"
        });
    }
    const result = await user.updateOne(
        { email: email },
        { $pull: { trash: { id: id }}}
    );
    if (result.nModified === 0) {
        return res.status(404).json({
            status:"Error",
            message:"trash index id incorrect note not found"
        });
    }
    res.json({
        status: "success",
        message: "deleted",
    })
}

module.exports = {
    Deleteforever
}