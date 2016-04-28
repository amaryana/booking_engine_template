var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Trips = new Schema({

  title:
    {
    type: String,
    lowercase: true,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    minimum: 0,
    required: true
  },
  image: {
    type: String
  },
  reveiws: {
    type: Number
  }
});

module.exports = mongoose.model("Trips", Trips);
