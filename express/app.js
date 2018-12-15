const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const https = require('https');
const helmet = require('helmet');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(helmet());

https.get({ host: 'codewizard.tech', path: '/' }, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
  
    res.on('data', function(d) {
      process.stdout.write(d);
    });
  
  }).on('error', function(e) {
    console.error(e);
  });
