// // WROTE OUT CRUD OPERATIONS. NOT SURE IF COMPLETELY CORRECT NEED TO BE REVIEWED.
// const db = require("../models").db;

// // This info needs to be specific to the user
// // AKA: John Smith's expenses, not everyone's expenses

// module.exports = {
//   // Find all expenses BY USER
//   findAllExpenses: function(req, res) {
//     db.models.Expense
//       // TO DO: fill in code for finding all expenses
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel)) // Need to connect to mongodb
//       .catch(err => res.status(422).json(err));
//   },
//   // Find a specific expense
//   findExpenseByID: function(req, res) {
//     db.models.Expense
//       // TO DO: fill in code for finding a specific expense
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   // Create a new expense
//   create: function(req, res) {
//     // TO DO: fill in code for creating a new expense
//     console.log("req.body TEST", req.body)
//     db.models.Expense
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   // Update a past expense
//   update: function(req, res) {
//     db.models.Expense
//       // TO DO: fill in code for editing a past expense
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   // Permanently delete expense
//   remove: function(req, res) {
//     // delete in mongo db
//     db.models.Expense
//       // TO DO: fill in code for deleting an expense
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// }

const express = require('express');
const expenseRoutes = express.Router();

// Require Business model in our routes module
let Express = require('../models/expense');

// Defined store route
expenseRoutes.route('/add').post(function (req, res) {
  console.log("Something is working");
  
  let express = new Express(req.body);
  express.save()
    .then(express => {
      res.status(200).json({'express': 'express in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = expenseRoutes;