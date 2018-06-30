const Info = require("../models/Info");

exports.listAllInfos = (req, res) => {
    Info.find({}, (err, task) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(info);
    });
};

exports.createNewInfo = (req, res) => {
    let newInfo = new Info(req.body);
    newInfo.save((err, info) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(info);
    });
};

exports.readInfo = (req, body) => {
    Info.findById(req.params.infoid, (err, info) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(info);
    });
};