const Info = require("../models/Info");

exports.listAllInfos = (req, res) => {
    Info.find({}, (err, task) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(info);
    });
};