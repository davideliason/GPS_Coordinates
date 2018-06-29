


const express = require('express')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = express()

app.get('/', (req, res) => res.send('Hello World! :)'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))