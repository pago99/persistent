var mongoose = require('mongoose');
var db = require('../db/connect.js');

var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    user_id        : ObjectId,
    username       : String,
    salt           : String,
    hash           : String,
    password       : String,
    time           : String,
    registered_at  : { type: Date, default: Date.now() }
});

var User = db.model('User', UserSchema);

module.exports = User;
