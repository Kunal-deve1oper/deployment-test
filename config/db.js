const mongoose = require("mongoose");

// const password = "LMmWwcp5RHjib6IS";

const url = `mongodb+srv://kunal:${process.env.password}@adminapi.5vdka6t.mongodb.net/?retryWrites=true&w=majority`

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(url);
        console.log(`Mongodb connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

module.exports = connectDb;