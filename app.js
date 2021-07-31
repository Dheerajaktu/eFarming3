const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')
const session = require('express-session');
const passport = require('passport');
const helmet = require('helmet');
const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/User');

/* DB Connection */
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('DB Connection Eshtablished');

}).catch((e => {
  console.log('Erro while Connecting DB', e);
}))

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

/* Middleware */
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));
app.use('/', indexRouter);
app.use('/user', usersRouter);

app.listen(port, () => {
  console.log('server started at port 4000');
})

module.exports = app;
