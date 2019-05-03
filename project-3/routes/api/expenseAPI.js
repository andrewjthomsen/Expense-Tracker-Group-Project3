const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");

// Matches with "/api/users/expenses" >>> "users" being a specific user defined, not ALL users
router.route("/users")
  .get(expenseController.findAllExpenses)
  .post(expenseController.create);

// Matches with "/api/users/expenses/:id" >>> "users" being a specific user defined, not ALL users
router.route("/users/:id")
  .get(expenseController.findExpenseByID)
  .put(expenseController.update)
  

module.exports = router;