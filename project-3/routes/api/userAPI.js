const router = require("express").Router();
const userController = require("../../controllers/userController");
// const profileController = require("../../controllers/profileController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAllUsers)
  .post(userController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(userController.findUserByID)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;