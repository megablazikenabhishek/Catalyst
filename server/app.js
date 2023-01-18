const express = require("express");
require("./db/connection");
const http = require("http");
require("dotenv").config();
const cors = require("cors");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server);

// midlleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(express.static("public"));

app.set("socketio", io);

// routers
const Com1 = require("./Routes/Com_1");

app.use("/Com1", Com1);
// app.get("/put", async(req, res, next)=>{
//     const data = require("./populate");
//     await Chat.create(data);
//     res.send("sucess");
// })

const port = 4200 || process.env.PORT;
const start =
    async () => {
  try {
    server.listen(
        port, () => console.log(`server is listening to port ${port}........`));
  } catch (error) {
    console.log(error);
  }
}

start();