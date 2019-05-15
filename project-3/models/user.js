const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
<<<<<<< HEAD
  },
  expense
=======
  }
  
  
>>>>>>> d0f24777f52bca2198803342c9011bfeb273027c
});
module.exports = User = mongoose.model("users", UserSchema);