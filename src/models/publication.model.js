const mongoose = require("mongoose")

const publicatonSchmea = new mongoose.Schema({
post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post",
    required:true
}
},{
    timestamps:{type:String}
})

module.exports= mongoose.model("publication",publicatonSchmea)