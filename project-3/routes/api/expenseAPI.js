// const router = require("express").Router();
// const expenseController = require("../../controllers/expenseController");
// //const jwtMiddleware = require('../../middleware');

// // Matches with "/api/users/expenses" >>> "users" being a specific user defined, not ALL users
// router.route("/expenses")
//   //.all(jwtMiddleware)
//   .get(expenseController.findAllExpenses)
//   .post(expenseController.create);

// // Matches with "/api/users/expenses/:id" >>> "users" being a specific user defined, not ALL users
// router.route("/expenses/:id")
//   .get(expenseController.findExpenseByID)
//   .put(expenseController.update)
  

// module.exports = router;
const express = require('express');
const expenseRoutes = express.Router();

// Require Business model in our routes module
let Expense = require('../../models/Expenses');

// Defined store route
expenseRoutes.route('/add').post(function (req, res) {
  let expense = new Expense(req.body);
  expense.save()
    .then(expense => {
      res.status(200).json({'expense': 'expense in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
expenseRoutes.route('/').get(function (req, res) {
    Expense.find(function(err, expenses){
    if(err){
      console.log(err);
    }
    else {
      res.json(expenses);
    }
  });
});


module.exports = expenseRoutes;
