const mongoose = require('mongoose');
const expenseTrackerSchema = new mongoose.Schema({
    expense: [{
        createdAt: {
            type: Date
        },
        amount: {
            type: Number
        },
        description: String

        }
    ],
    total_expense: {
        type: Number
    }
}, { strict: false});

const expenseTracker = mongoose.model('User', expenseTrackerSchema);
module.exports = expenseTracker;