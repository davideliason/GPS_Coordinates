const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    infoName: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    infoLatitude: {
        type: String,
        required: true
    },
    infoLongitude: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Infos", InfoSchema);