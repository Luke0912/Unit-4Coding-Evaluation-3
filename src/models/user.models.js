const mongoose = require("mongoose");

const userSchmea = new mongoose.Schema(
  {

    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    age: { type: Number, required: false },
    email: { type: String, required: true, unique: true },
    profileImages: [{ type: String, required: false }],
    r_userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ruser",
        required: true,
      }
  },
  {
    timestamps: { require: true },
  }
);

module.exports = mongoose.model("user", userSchmea);
