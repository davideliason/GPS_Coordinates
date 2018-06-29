


const express = require('express')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = express()

app.get('/', (req, res) => res.send('Hello World! :)'))

app.get('/sample', function (req, res, next) {
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

app.listen(3000, () => console.log('Example app listening on port 3000!'))