const mongoose = require("mongoose");

const dbURI =
    " ";

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