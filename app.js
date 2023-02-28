/*****************App imports****************************/
const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRouter');
/*****************MiddleWare*****************************/

app.use(express.json()); //for post request req.body
app.use(express.static('./public')); //for serving static files
app.use(morgan('dev'));

//custom middleware
app.use((req, res, next) => {
  console.log('😎 Hello There');
  next();
});
/*******************routes**************************/
app.use('/api/v1/tours', tourRouter);

//export app
module.exports = app;
