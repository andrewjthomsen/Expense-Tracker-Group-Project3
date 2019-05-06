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

// submitting user info
router.route("/login")
.post()// need to be connected to a new or existing controller
module.exports = router;