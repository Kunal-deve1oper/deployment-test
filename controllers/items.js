const api = require("../models/api");

const allData = async(req,res,next)=>{
    const key = req.headers.key;
    if(!key)
    {
        res.status(400).json("msg: no key found");
        return;
    }
    try {
        const apiData = await api.findById(key);
        const timestamp = new Date(apiData.updatedAt);
        const today = new Date();
        if(apiData.request >= 10)
        {
            if(timestamp.toDateString() === today.toDateString()){
                res.status(403).json({msg: "Daily Limit reached"});
                return;
            }
            else{
                apiData.request = 0;
            }
        }
        await api.updateOne({_id:key},{request: apiData.request + 1});
        res.status(200).json({msg : "hello"});
    } catch (error) {
        res.status(404).json("msg: not found");
    }
}

module.exports = allData;