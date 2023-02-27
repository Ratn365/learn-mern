/*****************App imports****************************/
const express = require('express');
const app = express();
/*****************MiddleWare*****************************/

app.use(express.json()); //for post request req.body

/*******************routes**************************/
app.get('/api/v1/tours', (req, res) =>
  res.status(200).json({
    status: 'success',
    data: { message: 'Hello World!', route: 'from route' },
  })
);
app.post('/api/v1/tours', (req, res) => {
  res.status(201).json({ status: 'success', data: { tour: req.body } });
});

app.get('/api/v1/tours/:id', (req, res) => {
  res.status(200).send(req.params.id);
});

app.patch('/api/v1/tours/:id', (req, res) => {
  const { id, name, description } = req.body;
  res.status(200).send(`Name ${id} ${name}, desc ${description}`);
});

app.delete('/api/v1/tours/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send(`Delete record with id ${id}`);
});
/******************server********************************/
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
