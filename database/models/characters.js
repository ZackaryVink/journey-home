let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    name: {
        first: String,
        last: String
    }
});

module.exports = mongoose.model('characters', CharacterSchema);