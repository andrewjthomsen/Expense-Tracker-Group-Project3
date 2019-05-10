const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
        createdAt: {
            type: Date,
            required: true,
            default: new Date()
        },
        User: {
            type: String,
            ref: "User",
            required: true
        },
        expense: [{
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
        }]
        
    
}, { strict: false});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;