const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const MONGODB_URI =
  'mongodb+srv://raghav:raghavHHH@cluster0-yxvwm.mongodb.net/venatus?retryWrites=true&w=majority';

app.set('view engine', 'ejs');
app.use(express.static('public'));

//ROUTES
const eventsRoutes = require('./routes/events');
//BODYPARSER
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/event', eventsRoutes);
mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
