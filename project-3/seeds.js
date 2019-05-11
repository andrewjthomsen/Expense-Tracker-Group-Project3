const db = require('./models');
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/expense");

db.User.create({
    username: "Andrew",
    password: "pass",
    email: "andrew@example.com"
})
db.expense.create({
   payee: "CreditOne",
   amount: 122,
   category: "electricity",
   comment: "Paid bill for electricity"
})
db.expense.create({
    payee: "Sprouts",
    amount: 12,
    category: "Fruit",
    comment: "Bought some fruit."
 })