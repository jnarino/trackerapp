var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://10.131.137.224:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inicio');
});

router.post('/insert', function(req, res, next) {

  var email1 = JSON.stringify(req.body.email);
  console.log(email1);
  var item = {
    latitud: req.body.Latitud,
    longitud: req.body.Longitud,
    email: email1
  };


  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('data').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/inicio');
});


module.exports = router;
