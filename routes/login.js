let express = require('express');
let router = express.Router();

router.get('/login', function(req, res){
  res.send('logged in');
});

module.exports = router;
