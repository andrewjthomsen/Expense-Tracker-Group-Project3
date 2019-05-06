const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  
  password: {
    type: String,
    required: true,
  },

  expenses: [{
    type: Schema.Types.ObjectId,
    ref: 'Expense'
  }] 
  
});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});


const User = mongoose.model("User", UserSchema);

module.exports = User;
// TODO
// NEED TO create user database and be able to recognize which user is logged in****