let express = require('express');
let app = express();

let config = require('./config');

let mongoose = require('mongoose');

const DATABASE_URI = process.env.MONGODB_URI || config.get('MONGODB_URI');
console.log(DATABASE_URI);

var database = require('./database/database').start(DATABASE_URI);
var models = require('./database/modelSetup').initiateModels();


require('./routes/routes')(app);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
