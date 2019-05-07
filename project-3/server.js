const express = require("express");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
const userAPI = require("./routes/api/userAPI");
// const router = require("express").Router();
//const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// DB Config
const db = require("./config/keys").mongoURI;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Define API routes here
const models = require("./models/");

  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  require("./config/passport")(passport);
  // Routes
  app.use("/api", userAPI)
  const PORT = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Send every other request to the React app
// Define any API routes before this runs
// app.get("/", (req, res) => {
//   res.send("HELLLLLLLLLLLOOOOOOOOOOOOOOO");
// });

// router.use(function(req, res) {
//   if (err) throw err;
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./test-html-css/html/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
