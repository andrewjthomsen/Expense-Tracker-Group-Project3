const path = require("path");
const router = require("express").Router();
const routes = require("./api/userAPI");
const expenseRoutes = require('./api/expenseAPI');
const signUpRoutes = require('./api/signUp');
const loginRoutes = require('./api/login');
// API Routes
router.use("/api/userAPI", routes);
router.use("/api", expenseRoutes);
// router.use('')

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;