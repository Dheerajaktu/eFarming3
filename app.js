require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')


var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/User');
const port = process.env.PORT || 4000;
var app = express();
const db = require('./src/models/index');
db.sequelize.sync();
app.use(bodyParser.urlencoded({ limit: `50mb`, extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
  console.log('server started at port 4000');
})

module.exports = app;
