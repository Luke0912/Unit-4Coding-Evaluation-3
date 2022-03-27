const mongoose = require("mongoose")

const commentSchmea = new mongoose.Schema({
    Body:{type:String,required:true },
    Comment:{type:String,required:true},
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:{require:true}
})
module.exports= mongoose.model("comment",commentSchmea)