const  zod  = require("zod")

function checkformat(req,res,next){
    const {email,password} = req.body;
    const process = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })
    const response = process.safeParse({email,password});
    if(!response.success){
        res.json({
            status : "Error",
            message : "Wrong format"
        })
        return 
    }
    next()
}

module.exports = {
    checkformat
}