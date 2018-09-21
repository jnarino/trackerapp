var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://mongo-server:27017/test';

/* GET home page.   mongodb://10.131.137.224:27017/test'   10.131.137.224:27017 */
router.get('/', function(req, res, next) {
  res.render('inicio');
});

router.post('/insert', function(req, res, next) {

  var antLat = JSON.stringify(req.body.Latitud);
  var antLong = JSON.stringify(req.body.Longitud);
  var antEm = JSON.stringify(req.body.email);

  console.log("MENSAJE MIO");
  console.log(antEm);
  var item = {
    latitud: antLat,
    longitud: antLong,
    email: antEm
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
