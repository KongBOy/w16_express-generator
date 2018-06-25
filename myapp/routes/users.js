var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/401411094', function(req, res, next) {
  res.render('show_users_data', { userid: '401411094',username:'龔洲暐' });
});

module.exports = router;
