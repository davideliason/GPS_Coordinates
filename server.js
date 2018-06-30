const express = require('express')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// db instance connection
require("./config/db");

const app = express();
const port = process.env.PORT || 3301;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World! :)'))

app.get('/users', function (req, res, next) {
    // res.send('sample works');  simple response
    res.json([{
        id: 1,
        username: "john",
        latitude: "here",
        longitude: "there"
    }, {
        id: 2,
        username: "bob",
        latitude: "beach",
        longitude: "beachtowel"
    }]);
});

app.listen(port, () => console.log('Example app listening on port 3000!'))