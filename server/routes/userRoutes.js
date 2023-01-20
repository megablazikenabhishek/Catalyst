const router = require('express').Router();
const User = require('../models/User');
const Message = require("../models/Message");

// creating user
router.post('/', async(req, res)=> {
  try {
    const {name, email, password, picture} = req.body;
    console.log(req.body);
    const user = await User.create({name, email, password, picture});
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if(e.code == 11000){
      msg = "User already exists"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg)
  }
})

// login user

router.post('/login', async(req, res)=> {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
})

router.post("/save", async(req, res) => {
  const {savedMessages} = await User.findById(req.body.user_id);
  
  let flag = false;
  savedMessages.forEach((i)=>{
    if(i===req.body.message_id){
      flag=true;
    }
  });

  if(flag){
    return res.send("done");
  }

  savedMessages.push(req.body.message_id);
  console.log(savedMessages);
  await User.findByIdAndUpdate(req.body.user_id, {savedMessages});
  res.send("done");
});

router.get("/save", async(req, res)=>{
  let result = [];
  const {savedMessages} = await User.findById(req.body.user_id);
  const msg = await Message.find({});
  msg.forEach((i)=>{
    if(savedMessages.includes(i._id))
      result.push(i);
  });
  console.log(result);
  res.json({data:result})
})
module.exports = router