const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  //name ,rating,price
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ratings: { type: Number, default: 4.5 },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
