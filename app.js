const express = require('express');
const http = require('http');

const app = express();
//const server = http.createServer();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('server listening');
});
