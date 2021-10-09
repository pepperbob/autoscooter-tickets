var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var helloRouter = require('./routes/hello');
var ticketsRouter = require('./routes/tickets');

var beUnreliable = function (req, res, next) {
  var unreliabilities = ['Yes', 'No', 'Maybe'];
  var thingIs = unreliabilities[Math.floor(Math.random() * unreliabilities.length)];
  
  console.log(thingIs)
  next()
}

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(beUnreliable)

app.use('/', helloRouter);
app.use('/tickets', ticketsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {message: "Unexpected Error"};

  // send back the error message
  res.status(err.status || 500);
  res.send({msg: res.locals.error.message});
});

module.exports = app;
