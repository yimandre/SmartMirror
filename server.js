require('dotenv').load();

var express     = require('express');
var path        = require('path');
var favicon     = require('serve-favicon');
var logger      = require('morgan');
var fs          = require('fs');
var bodyParser  = require('body-parser');
var url         = require('url');
var http        = require('http');
var seo         = require('express-seo');

var session     = require('express-session');

var mainRoutes   = require('./routes/index');
var skycons     = require('./views/js/skycons/skycons')

var app         = express();
var port        = 8080;

//app.use(favicon(path.join(__dirname, 'public', 'img', 'start.jpg')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);


app.use(function(req, res, next) {
  console.log(req.url);
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, function(err) {
  if(err){
    return console.log('Error ', err);
  }

  console.log('Server listening on '+port);
});

module.exports = app;
