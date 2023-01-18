const express = require("express");
const connectCom1 = require("./db/connection");
require("dotenv").config();
const Chat = require("./models/Chat");

const app = express();

//midlleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/testing", async(req, res, next)=>{
    const data = await Chat.find({})
    console.log(data);
    res.status(200).json({data});
})

// app.get("/put", async(req, res, next)=>{
//     const data = require("./populate");
//     await Chat.create(data);
//     res.send("sucess");
// })

const port = 4200||process.env.PORT;
const start = ()=>{
    try {
        require("./db/connection");
        app.listen(port, ()=>console.log(`server is listening to port ${port}........`));
    } catch (error) {
        console.log(error);
    }
}

start();
