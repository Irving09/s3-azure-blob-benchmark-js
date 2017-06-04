'use strict';

const aws   = require('aws-sdk');
const app   = require('express')();
const http  = require('http').Server(app);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'IoT Home intruder socket server'
  });
});

http.listen(3000, () => console.log('listening on *:3000'));