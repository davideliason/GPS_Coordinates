const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    latitudeName: {
        type: String,
        required: true
    },
    longitudeName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Users", UserSchema);