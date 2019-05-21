const db = require('./models');
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/expensetracker");

db.User.create({
    username: "Andrew",
    password: "pass",
    email: "andrew@example.com"
})