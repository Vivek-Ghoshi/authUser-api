const jwt = require("jsonwebtoken");

module.exports.isLoggedIn = (req,res,next)=>{
    try {
        let token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"access denied no token provided"});
        }
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error.message)
    }
}