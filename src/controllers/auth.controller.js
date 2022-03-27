// const express = require("express")

const Ruser = require("../models/reguser.model");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const newToken = (ruser) => {
  return jwt.sign({ ruser }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let ruser = await Ruser.findOne({ email: req.body.email });
    console.log(ruser);

    //checking email
    if (ruser) {
      return res.status(400).send({ message: "Email already exists" });
    }
    console.log(ruser);

    //if new user, registered
    ruser = await Ruser.create(req.body);
    console.log(ruser);

    const token = newToken(ruser);
    return res.status(200).send({ ruser, token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const ruser = await Ruser.findOne({ email: req.body.email });
    //checked if mail exists
    if (!ruser) {
      return res.status(400).send("wrong Email or password");
    }

    // if email exists,check password
    const match = ruser.checkPassword(req.body.password);

    //if it doesent matches
    if (!match) {
      return res.status(400).send({ message: "wrong or password" });
    }
    //if it matches
    const token = newToken(ruser);
    return res.status(201).send({ ruser, token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { login, register, newToken };
