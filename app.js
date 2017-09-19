const express = require('express');
// const http = require('http');

const app = express();
//const server = http.createServer();

app.use('/', function (req, res, next) {
    console.log(req.method, res.statusCode);
    next();
});

app.use('/special', function (req, res, next) {
    console.log('Secret area!');
    next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/news', function(req, res) {
    res.send('News!');
});

app.listen(3000, function () {
  console.log('server listening');
});
