const express = require("express");

const router = express.Router();

const { body, validationResult } = require("express-validator");

const uploads = require("../midlewares/uploads");

const User = require("../models/user.models");

const Ruser = require("../models/reguser.model");

const path = require("path");

const authenticate = require("../midlewares/authenticate")

router.post(
  "",authenticate,
  uploads.single("profileImages"),
  body("firstName").not().isEmpty().isLength({ min: 3, max: 30 }),
  body("lastName").not().isEmpty().isLength({ min: 3, max: 30 }),
  body("age")
    .not()
    .isEmpty()
    .custom((value) => {
      if (value < 1 || value > 150) {
        return "enter proper age";
      }
      return true;
    }),
  async (req, res) => {
    console.log("hello");
    req.body.r_userId = req.ruser._id;
    try {
      console.log(req.file)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log({ errors });
        return res.status(400).json({ errors: errors.array() });
      }
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        profileImages: req.file.path,
        r_userId:req.body.r_userId
      });
      console.log(user);
      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
      return res.status(404).send({ message: error.message });
    }
  }
);

module.exports = router;
