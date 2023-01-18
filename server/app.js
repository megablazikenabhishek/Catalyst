const express = require("express");
require("./db/connection");
const http = require("http");
require("dotenv").config();
const Chat = require("./models/Chat");
const cors = require("cors");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server);

// midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/testing", async (req, res, next) => {
  const data = await Chat.find({});
  console.log(data);
  res.status(200).json({ data });
});

// app.get("/put", async(req, res, next)=>{
//     const data = require("./populate");
//     await Chat.create(data);
//     res.send("sucess");
// })

const port = 4200 || process.env.PORT;
const start = async () => {
  try {
    // await new Promise(resolve=>{
    //     require("./db/connection");
    //     resolve();
    // });
    server.listen(port, () =>
      console.log(`server is listening to port ${port}........`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
