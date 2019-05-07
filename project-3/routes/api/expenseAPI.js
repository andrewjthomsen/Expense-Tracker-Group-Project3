const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");
//const jwtMiddleware = require('../../middleware');


// Matches with "/api/users/expenses" >>> "users" being a specific user defined, not ALL users
router.route("/expenses")
  //.all(jwtMiddleware)
  .get(expenseController.findAllExpenses, expenseController.sum)
  .post(expenseController.create);

// Matches with "/api/users/expenses/:id" >>> "users" being a specific user defined, not ALL users
router.route("/users/:id")
  .get(expenseController.findExpenseByID)
  .put(expenseController.update)
  

module.exports = router;