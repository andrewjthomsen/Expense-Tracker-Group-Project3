const express = require("express");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
const userAPI = require("./routes/api/userAPI");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
// Loads in Mongoose database
const config = require("./routes/api/DB");
// BRING IN ROUTE FOR EXPENSE FORM
const expenseRoute = require("./routes/api/expenseAPI");


// Bring in Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Bring in CORS
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const expenseAPI = require("./routes/api/expenseAPI");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// // Define API routes here
app.use(passport.initialize());
app.use("/api", userAPI)
const PORT = process.env.PORT || 5000; 

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', expenseRoute);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});