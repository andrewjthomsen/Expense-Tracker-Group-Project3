const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
        createdAt: {
            type: Date,
            required: true,
            default: new Date()
        },
        amount: {
            type: Number,
            required: true
        },
        description: {
            type: String
        }
    
}, { strict: false});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;