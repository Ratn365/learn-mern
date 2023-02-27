/*****************App imports****************************/
const express = require('express');
const app = express();
/*****************MiddleWare*****************************/

app.use(express.json()); //for post request req.body

/*******************routeHandler**************************/

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { message: 'Hello World!', route: 'from route' },
  });
};

const createTour = (req, res) => {
  res.status(201).json({ status: 'success', data: { tour: req.body } });
};
const getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    idParam: req.params.id,
    data: { tour: req.body },
  });
};

const updateTour = (req, res) => {
  const { id, name, description } = req.body;
  res.status(200).json({ status: 'success', data: { id, name, description } });
};

const deleteTour = (req, res) => {
  const { id } = req.params;
  res.status(204).json({ status: 'success', data: null, id: id });
};
/*******************routes**************************/
app.route('/api/v1/tours').get(getAllTours).post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);
/******************server********************************/
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
