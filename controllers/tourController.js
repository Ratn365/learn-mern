const checkid = (req, res, next, val) => {
  if (req.params.id * 1 < 1) {
    //change as per use later
    //return res.status(404).json({ status: 'fail', message: 'invalid Id' });
    console.log('😎 Hi , The id is %s', val);
  }
  next();
};

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

module.exports = {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkid,
};
