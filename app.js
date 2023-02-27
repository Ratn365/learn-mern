/*****************App imports****************************/
const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');
/*****************MiddleWare*****************************/

app.use(express.json()); //for post request req.body

/*******************routes**************************/
app.use('/api/v1/tours', tourRouter);

/******************server********************************/
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
