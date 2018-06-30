const express = require('express')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const infoController = require('./controllers/InfoController');


// db instance connection
require("./config/db");

const app = express();
const port = process.env.PORT || 3301;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World! :)'))

// more API Endpoints

app
    .route("/infos")
    .get(infoController.listAllInfos)
    .post(infoController.createNewInfo);

app
    .route("/infos/:taskid")
    .get(infoController.readInfo)
    .put(infoController.updateInfo)
    .delete(infoController.deleteInfo);

app.get('/infos', function (req, res, next) {
    // res.send('sample works');  simple response
    res.json([{
        infoName: "john",
        createdOn: "today",
        infoLatitude: "here",
        infoLongitude: "there"
    }, {
        infoName: "bob",
        createdOn: "tomorrow",
        infoLatitude: "beach",
        infoLongitude: "beachtowel"
    }]);
});

app.listen(port, () => console.log('Example app listening on port 3000!'))