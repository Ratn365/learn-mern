/*****************App imports****************************/
const express = require('express');
const app = express();
/*****************MiddleWare*****************************/

app.use(express.json()); //for post request req.body

/*******************routes**************************/
app.get('/api/v1/tours', (req, res) =>
  res.json({ message: 'Hello World!', route: 'from route' })
);
app.post('/api/v1/tours', (req, res) => {
  res.send(req.body);
});

/******************server********************************/
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
