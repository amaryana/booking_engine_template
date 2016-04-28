var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Trips = new Schema ({

  title: {type: String, required: true},
  price: {type: String, required: true}
});

module.exports = new Schema({


  title:
    {
    type: String,
    lowercase: true,
    required: true,
    index: true
  },
  price: {
    type: Number,
    minimum: 0,
    required: true
  },
  quantity: {
    type: Number,
    minimum: 1,
    required: true
  },
  trips: {type: mongoose.Schema.Types.ObjectId, ref: 'trips', required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},

});
