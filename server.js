var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var wiki = require('./wiki.js');

require('dotenv').config()
// instantiate express
var app = express();
var port = process.env.PORT || '3001';

var test_variable = "port";

// middleware
// log request details
app.use(morgan('dev'));
// help with security by setting HTTP headers
app.use(helmet());
// X-Powered-By header disabled by helmet.js
app.use(helmet.hidePoweredBy());
app.use('/media', express.static('public'));


// route with GET request
app.get('/', (req, res) => {
    res.send('hello ' + process.env.SAMPLE_NAME);
});

// if url is /wiki then use the wiki.js routing file:
app.use('/wiki', wiki);


app.listen(port, () => {
    console.log(`listening at ${test_variable} ${port}`);
});