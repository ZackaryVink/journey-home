var express = require('express');
var app = express();

require('./routes/routes')(app);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
