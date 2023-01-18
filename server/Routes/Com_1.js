const express = require("express");
const router = express.Router();

router.get("/", (req, res, next)=>{
    var io = req.app.get('socketio');
    io.emit("connected", "hello");
})

module.exports = router;