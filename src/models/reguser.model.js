const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const ruserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:[{type:String,required:false}]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//hasing without bcrypt use pre middleware

// userSchema.pre("save",function(next){
//     let hashedPassword = this.password + "secret";
//     this.password = hashedPassword
//     return next()
// })

ruserSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

ruserSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("ruser", ruserSchema);