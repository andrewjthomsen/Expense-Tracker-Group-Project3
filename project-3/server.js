// const express = require("express");

// const path = require("path");
// // const router = require("express").Router();
// const PORT = process.env.PORT || 3001;
// const app = express();
// const mongoose = require("mongoose");
// const routes = require("./routes/api/api");
// const config = require("./routes/api/DB");
// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// mongoose.connect(
//   // process.env.MONGODB_URI ||  "mongodb://localhost/expensetracker"
//    process.env.MONGODB_URI || config.DB
// )

// // Define API routes here
// const models = require("./models/");

// // Send every other request to the React app
// // Define any API routes before this runs
// // app.get("/", (req, res) => {
// //   res.send("HELLLLLLLLLLLOOOOOOOOOOOOOOO");
// // });

// // router.use(function(req, res) {
// //   if (err) throw err;
// //   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// // });


// app.use(routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// // app.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname, "./test-html-css/html/index.html"));
// // });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require("./routes/api/DB");
const expenseRoute = require("./controllers/expenseController");
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/expense", expenseRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});