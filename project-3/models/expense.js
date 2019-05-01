const mongoose = require("mongoose");

const expenseTrackerSchema = new mongoose.Schema({
    
    expense: {
        createdAt: {
            type: Date,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        description: {
            type: String
        }
    },
    
}, { strict: false});

const expenseTracker = mongoose.model("Expense", expenseTrackerSchema);

module.exports = expenseTracker;