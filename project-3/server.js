const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');

// middleware express-session
app.use(session({ secret: 'Yahama Fazer', resave: true, saveUninitialized: true, cookie: { maxAge: 600000000 }}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI ||  "mongodb://localhost/expensetracker"
)
mongoose.connection.on('error', (err)=>{
	if(err){
		console.log('Error in database connection: '+ err);
	}
});

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Define API routes here
const models = require('./models/');

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// testing server
app.get('/hello', function(req, res){
	res.send('<h1> Hello there, I am working! </h1>');
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
