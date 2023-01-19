const router = require('express').Router();
const Message = require('../models/Message');

router.put("/:id", async (req, res) => {
    try {
      const message = await Message.findById(req.params.id);
      if (!message.upvote.includes(req.body.userId)) {
        await message.updateOne({ $push: { upvote: req.body.userId } });
        res.status(200).json("The message has been liked");
      } else {
        await message.updateOne({ $pull: { upvote: req.body.userId } });
        res.status(200).json("The message has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  })

  module.exports = router