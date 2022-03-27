const mongoose = require("mongoose");

const publicatonSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    }
  },
  {
    timestamps: { type: String },
  }
);

module.exports = mongoose.model("publication", publicatonSchmea);
