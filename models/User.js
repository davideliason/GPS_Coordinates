const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    userLatitude: {
        type: String,
        required: true
    },
    userLongitude: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Users", UserSchema);