var express = require('express');
var router = express.Router();

/* Gallery Page */
router.get('/', function(req, res, next) {
  res.render('gallery', { title: 'MCakeHousZ' });
  /*res.send('respond with a resource');*/
});

module.exports = router;
