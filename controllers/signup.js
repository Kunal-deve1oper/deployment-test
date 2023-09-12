const User = require("../models/user")
const sendMail = require("../utils/email")
const hash = require("../utils/hash");


const signup = async(req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    try {
        const isPre = await User.findOne({email:email});
        if(isPre){
            res.status(409).json("mag: User already present");
            return;
        }
    } catch (error) {
        res.status(404).json("error: invalid input");
    }
    password = await hash.hashPass(password);
    const data = new User({
        email: email,
        name: name,
        password: password
    });
    try {
        const result = await data.save();
        sendMail(email,name).then((info)=>{
            console.log(info.messageId);
        }).catch((err)=>{
            console.log("error occured");
        });
        res.status(201).json(`data:${result}`);
    } catch (error) {
        res.status(404).json("error: cannot save to database");
    }
}



const login = async(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {
        const fetchedData = await User.findOne({email: email});
        if(fetchedData == null)
        {
            res.status(404).json({msg: "wrong email"});
            return;
        }
        try {
            const data = await hash.comparePass(password,fetchedData.password);
            if(data)
                res.status(200).send({msg: "logged in successfully"});
            else
                throw new Error;
        } catch (error) {
            res.status(401).json({msg: "wrong password"});
        }
    } catch (error) {
        req.status(404).json({msg: "user not found"});
    }
}

module.exports = {signup,login};