/*****************App imports****************************/
const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRouter');
/*****************MiddleWare*****************************/

app.use(express.json()); //for post request req.body
app.use(morgan('dev'));
/*******************routes**************************/
app.use('/api/v1/tours', tourRouter);

//export app
module.exports = app;
