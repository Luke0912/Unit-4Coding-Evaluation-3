const express = require("express");

const router = express.Router();

const Comment = require("../models/comment.model");

router.post("",async (req, res) => {
  console.log("hello");
  try {
    const comment = await Comment.create(req.body);
    console.log(comment);
    return res.status(201).send(comment);
  } catch (error) {
    console.log(error);
    return res.status(404).send({ message: error.message });
  }
});
module.exports = router;
