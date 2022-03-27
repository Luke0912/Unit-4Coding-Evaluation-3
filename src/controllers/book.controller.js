const express = require("express");

const router = express.Router();

const Book = require("../models/book.model");

const { body, validationResult } = require("express-validator");

const uploads = require("../midlewares/uploads");

router.post(
  "",
  uploads.single("coverImage"),
  body("Content").not().isEmpty(),
  async (req, res) => {
    console.log("hello");
    try {
      console.log(req.file);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log({ errors });
        return res.status(400).json({ errors: errors.array() });
      }
      const book = await Book.create({
        likes: req.body.likes,
        coverImage: req.file.path,
        Content: req.body.Content,
        AuthorId: req.body.Author,
        PublicationId: req.body.Publication,
        CommenId: req.file.Comment,
      });
      console.log(book);
      return res.status(201).send(book);
    } catch (error) {
      console.log(error);
      return res.status(404).send({ message: error.message });
    }
  }
);
module.exports = router;
