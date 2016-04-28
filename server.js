var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Trip = require('./trips.js');
var tripCtrl = require('./tripCtrl.js');

var app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/photofin');

app.use(express.static(__dirname + "/public"));

var port = 3000;

mongoose.createConnection('mongodb://localhost/photofin', function(err) {
    if (err) throw err;
});

app.listen(port, function() {
  console.log("Started server on port", port);
});


app.post('/api/trips', function(req, res) {
  var newTrip = new Trip(req.body); {
      newTrip.save(function(err, s){
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(s);
        }
      });
}

});

app.get('/api/trips', tripCtrl.read);

app.get('/api/trips:id', tripCtrl.title);

app.put('/api/trips/:id', tripCtrl.update);

// app.delete('/api/trips', function(req, res) {
//   console.log('DELETE products');
//   res.end();
// });
//
// app.put('/api/products', function(req, res) {
//   console.log('PUT products');
//   res.end();
// });


// var db = mongojs('store', ['products']);
// var products = db.collection("products");

// app.get('/api/products', function(req, res){
//
//   // var query = req.query;
//     // db.products.find(query, function(err, response){
//     //     if(err) {
//     //         res.status(500).json(err);
//     //     } else {
//     //         res.json(response);
//     //     }
//     // });
// });
//
// app.get('/api/products/:id', function(req, res){
//   // res.send("I will GET you a present at api/products. It is a " + req.params.id);
// });
//
// app.post('/api/products', function(req, res){
//   // db.products.save(req.body, function (err, response){
//   //   if(err) {
//   //       return res.status(500).json(err);
//   //   } else {
//   //     return res.json(response);
//   //   }
//   // });
//
// });
//
// app.get('/api/products/:id', function(req, res){
//     // var idObj = {
//     //     _id: req.params.id
//     // };
//     // db.products.findOne(idObj, function(err, response){
//     //     if(err) {
//     //         res.status(500).json(err);
//     //     } else {
//     //         res.json(response);
//     //     }
//     // });
// });
//
//
// app.get('/api/products', function(req, res){
//     // var query = req.query;
//     // db.products.find(query, function(err, response){
//     //     if(err) {
//     //         res.status(500).json(err);
//     //     } else {
//     //         res.json(response);
//     //     }
//     // });
//     // console.log('working');
// });
//
//
// app.put('/api/products/:id', function(req, res){
//     // if(!req.params.id){
//     //     return res.status(400).send('id query needed');
//     // }
//     // var query = {
//     //     _id: mongojs.ObjectId(req.params.id)
//     // };
//     // db.products.update(query, req.body, function(error, response){
//     //     if(error) {
//     //         return res.status(500).json(error);
//     //     } else {
//     //         return res.json(response);
//     //     }
//     // });
// });
//
// app.delete('/api/products/:id', function(req, res){
//     // if(!req.params.id){
//     //     return res.status(400).send('id query needed');
//     // }
//     // var query = {
//     //     _id: mongojs.ObjectId(req.params.id)
//     // };
//     // db.products.remove(query, function(error, response){
//     //     if(error) {
//     //         return res.status(500).json(error);
//     //     } else {
//     //         return res.json(response);
//     //     }
//     // });
// });
//
// app.listen(port, function() {
//   console.log("Started server on port", port);
// });
