// Module dependencies
var mongoose = require('mongoose');

// connect to database
module.exports = {

    start: function (db) {
        mongoose.connect(db);

        mongoose.connection.on('open', function () {
            console.log('We have connected to mongoose at ' + db);
        });

    },

    close: function () {
        mongoose.disconnect();
    }
};
