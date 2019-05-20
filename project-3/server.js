const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./routes/api/DB');
const expenseRoute = require('./routes/api/expenseAPI');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', expenseRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});