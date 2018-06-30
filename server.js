var express = require('express');
var morgan = require('morgan');

// instantiate express
var app = express();
var port = process.env.PORT || '3001';
// log request details
app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log("listening at port 3001");
});