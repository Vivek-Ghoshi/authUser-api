const userModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");


module.exports.registerController = async (req,res) =>{
    try {
        let {username,email,fullName,DateOfBirth,gender,password,country} = req.body;
        let user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({message:"Email is already registerd please login"});
        }
        let newUser = await userModel.create({
            username,
            email,
            fullName,
            DateOfBirth,
            gender,
            password,
            country
        });
        let token = jwt.sign({email:newUser.email, id:newUser._id},process.env.JWT_KEY,{expiresIn:"1h"});
        res.cookie("token",token);
        res.json({
            message: "User Registerd Successfully",
            user:newUser,
        });
    } catch (error) {
        console.log(error.message)
    }
};

module.exports.loginController = async (req,res)=>{
    try {
        let {email} = req.body;
        let user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "no account found with this email please create one"});
        }
        let token = jwt.sign({email: user.email,id: user._id},process.env.JWT_KEY,{expiresIn:"1h"});
        res.cookie("token",token);
        res.json({
            message: "Login Successful",
            user:user,
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.UserDetails = async(req,res)=>{
     try {
        let {email} = req.user;
        let user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message : "Not found user"});
        }
        res.json({user})
     } catch (error) {
        console.log(err.message)
     }
}