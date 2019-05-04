// WROTE OUT CRUD OPERATIONS. NOT SURE IF COMPLETELY CORRECT NEED TO BE REVIEWED.
const db = require("../models").db;

// This info needs to be specific to the user
// AKA: John Smith's expenses, not everyone's expenses

module.exports = {
  // Find all expenses BY USER
  findAllExpenses: function(req, res) {
    db.models.Expense
      // TO DO: fill in code for finding all expenses
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel)) // Need to connect to mongodb
      .catch(err => res.status(422).json(err));
  },
  // Find a specific expense
  findExpenseByID: function(req, res) {
    db.models.Expense
      // TO DO: fill in code for finding a specific expense
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Create a new expense
  create: function(req, res) {
    // TO DO: fill in code for creating a new expense
    console.log("db TEST", db)
    db.models.Expense
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Update a past expense
  update: function(req, res) {
    db.models.Expense
      // TO DO: fill in code for editing a past expense
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Permanently delete expense
  remove: function(req, res) {
    // delete in mongo db
    db.models.Expense
      // TO DO: fill in code for deleting an expense
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
