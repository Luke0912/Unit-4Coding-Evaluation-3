const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    likes:{type:Number,required:true,default:0
    },
    coverImage:[{type:String,required:true,unique:true}],
    Content:{type:String,required:true},
    AuthorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    PublicationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publication",
        required:true
    },
    CommentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
        required:true
    }
},{
    timestamps:{require:true}
})
module.exports= mongoose.model("book",bookSchema)
