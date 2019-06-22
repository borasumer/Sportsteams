// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const sportsteamsRoutes = require('./routes/sportsteams');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Your route file for your sportsteams
app.use('/sportsteams', sportsteamsRoutes);

// Exporting the changes
module.exports = app;