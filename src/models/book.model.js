const mongoose = require("mongoose")

const bookSchmea = new mongoose.Schema({
    likes:{type:Number,required:true,default:0
    },
    coverImage:{type:String,required:true,unique:true},
    content:{type:String,required:true},
    AuthorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    publicationID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publication",
        required:true
    },
    commentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
        required:true
    }
},{
    timestamps:{require:true}
})
module.exports= mongoose.model("book".bookSchmea)
