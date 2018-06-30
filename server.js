var express = require('express');
var morgan = require('morgan');

require('dotenv').config()
// instantiate express
var app = express();
var port = process.env.PORT || '3001';
// log request details
app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send('hello' + process.env.SAMPLE_NAME);
});



app.listen(port, () => {
    console.log("listening at port 3001");
});