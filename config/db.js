const mongoose = require("mongoose");

const dbURI =
    "mongodb://GPS_Coordinates_Admin:GPS_Coordinates_Admin@cluster0-shard-00-00-luwbw.mongodb.net:27017,cluster0-shard-00-01-luwbw.mongodb.net:27017,cluster0-shard-00-02-luwbw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection est'd!");
    },
    err => {
        console.log("Error with DB connection b/c of: ", err);
    }
);

// require any models

require("../models/Info");