const mongoose = require("mongoose");

const expenseTrackerSchema = new mongoose.Schema({
    
    expense: [{
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
    }],
    
    total_expense: {
        type: Number
    }
}, { strict: false});

const expenseTracker = mongoose.model("User", expenseTrackerSchema);

module.exports = expenseTracker;