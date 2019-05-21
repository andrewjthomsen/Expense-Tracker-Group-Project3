const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userAPI = require("./routes/api/userAPI");
const passport = require("passport");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const expenseRoute = require("./routes/api/expenseAPI");

// // DB Config
const db = require("./config/keys");

mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);
// mongoose.connect(db2.DB, { useNewUrlParser: true }).then(
//   () => {
//     console.log("Database is connected");
//   },
//   err => {
//     console.log("Can not connect to the database" + err);
//   }
// );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// routes
app.use("/api", expenseRoute);
app.use("/api/userAPI", userAPI);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
