const jwt= require("jsonwebtoken");
const tokenSecret="BuildDigitalIndia";

module.exports=(req,res,next)=>{
    const token=req.headers["authorization"];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    jwt.verify(token,tokenSecret,(err,decoded)=>{
        if(err){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.user=decoded;
        next();
    });
}
