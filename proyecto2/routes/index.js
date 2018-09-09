var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Creación ID',
    success: req.session.success,
    errors: req.session.errors
  });
  req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({
    min: 4
  }).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  
  res.redirect('/');

});

function almacenamiento() {
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("id_email", req.body.email);
    // Retrieve
    console.log(localStorage.getItem('id_email'));
  } else {
    console.log("Sorry, your browser does not support Web Storage...");
  }
}

module.exports = router;
