const express = require("express")

const router = express.Router()

const { body, validationResult } = require('express-validator')
const { options } = require("..")
const uploads = require("../midlewares/uploads")

const User = require("../models/user.models")

router.post("", uploads.single("profileImages"),
body("firstname").not().isEmpty().isLength({min:3,max:30}),
body("lastname").not().isEmpty().isLength({min:3,max:30}),
body("age").not().isEmpty().custom(value=>{
    if(value<1||value>150){
        return "enter proper age"
    }
    return true
}),
async (res,req)=>{
    try {
        const user = User.create(req.body)
        res.status(201).send(user)
    } catch (error) {
        
    }
})

module.exports=router



