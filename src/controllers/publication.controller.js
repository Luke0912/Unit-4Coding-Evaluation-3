const express = require("express");

const router = express.Router();

const Publication = require("../models/publication.model");

router.post("",async (req, res) => {
  console.log("hello");
  try {
    const publication = await Publication.create(req.body);
    console.log(publication);
    return res.status(201).send(publication);
  } catch (error) {
    console.log(error);
    return res.status(404).send({ message: error.message });
  }
});
module.exports = router;