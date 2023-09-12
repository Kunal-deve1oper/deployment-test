const express = require("express");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");
const loginRoutes = require("./routers/user");
const api = require("./routers/api");
const items = require("./routers/items");

const app = express();

connectDb();

app.use(bodyParser.json());
app.use(loginRoutes);
app.use(api);
app.use("/data",items);
app.use("/all",(req,res,next)=>{
    res.status(200).json({msg: "all good"});
})

app.listen(process.env.PORT || 3000);