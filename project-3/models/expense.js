const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    createdAt: {
      type: Date,
      required: true,
      default: new Date()
    },
    // User: {
    //   type: String,
    //   ref: "User",
    //   required: true
    // },

    UserId: {
      type: String,
      ref: "User",
      required: true
    },
    payee: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    comment: {
      type: String
    }
  },{
  collection: "expense"
  // { strict: false }
  });

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
