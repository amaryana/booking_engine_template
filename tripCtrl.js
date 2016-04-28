// var Product = require('../models/Product');	// Doesn't need .js
var Trip = require('./trips.js');

module.exports = {
	create: function(req, res){
		var newTrip = new Trip(req.body);
		newProduct.save(function(err, result){
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
		// res.send('create test');
	},
	read: function(req, res){
		Trip
		.find(req.query, req.body)
		.exec(function(err, result){
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
		// res.send('read test');
	},
	update: function(req, res){
		Trip
		.findByIdAndUpdate(req.params.id, req.body, function(err, result){
				if (err) return res.status(500).send(err);
				else res.send(result);
		});
		// res.send('update test');
	},
	delete: function(req, res){
		Trip
		.findByIdAndRemove(req.params.id, function(err, result){
				if (err) return res.status(500).send(err);
				else res.send(result);
		});
		// res.send('delete test');
	},
  title: function(req, res) {
    Trip
    .findById(req.params.id, function(err, result){
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }
	// test: function(req, res){
	// 	var newUser = new User(req.body);
	// 	newUser.save(function(err, result){
	// 		if (err) return res.status(500).send(err);
	// 		else res.send(result);
	// 	})
	// }
};
