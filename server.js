var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet')

require('dotenv').config()
// instantiate express
var app = express();
var port = process.env.PORT || '3001';
// log request details
app.use(morgan('combined'));
// help with security by setting HTTP headers
// X-Powered-By header disabled by helmet.js
app.use(helmet());


app.get('/', (req, res) => {
    res.send('hello' + process.env.SAMPLE_NAME);
});



app.listen(port, () => {
    console.log("listening at port 3001");
});