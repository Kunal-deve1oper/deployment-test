const api = require("../models/api");
const User = require("../models/user")

const generateKey = async(req,res,next)=>{
    const id = req.body.id;
    try {
        const user = await api.findOne({userId: id});
        if(user)
        {
            res.status(409).json("msg: User already has api key");
            return;
        }
    } catch (error) {
        res.status(404).json("error: invalid input");
    }
    try {
        const ifUser = await User.findById(id);
        if(!ifUser)
        {
            res.status(404).json("msg: no user present");
            return;
        }
    } catch (error) {
        res.status(404).json(err);
    }
    const data = new api({
                request: 0,
                userId: id
    });
    data.save(data).then((data)=>{
        res.status(201).json(`key: ${data._id}`);
    }).catch((err)=>{
        res.status(404).json("msg: unable to save");
    });
}

module.exports = generateKey;