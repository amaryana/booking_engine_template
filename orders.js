var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Products = new Schema ({

  title: {type: String, required: true},
  price: {type: String, required: true}
});

var Orders = new Schema({


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
  products: [Products],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},

});

module.exports = mongoose.model("Orders", Orders);
