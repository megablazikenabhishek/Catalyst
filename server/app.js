const express = require("express");
require("./db/connection");
const http = require("http");
require("dotenv").config();
const cors = require("cors");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server);

//midlleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static("public"));

app.set("socketio", io);

//routers
const Com_1 = require("./Routes/Com_1");

app.use("/Com1", Com_1);

//dummy
// const Com1_Chats = require("./models/Chat");
// const Com2_Chats = require("./models/Chat");
// const Com3_Chats = require("./models/Chat");
// const Users = require("./models/Users");
// app.get("/put", async(req, res, next)=>{
//     const data = require("./populate_users");
//     console.log(data);
//     await Users.create(data);
//     res.send("sucess");
// })

const port = 4200||process.env.PORT;
const start = async()=>{
    try {
        server.listen(port, ()=>console.log(`server is listening to port ${port}........`));
    } catch (error) {
        console.log(error);
    }
}

start();