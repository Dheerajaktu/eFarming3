const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const helmet = require('helmet');
const indexRouter = require('./src/routes/index');
const flash = require('connect-flash');
// const usersRouter = require('./src/routes/user');

app.use(cookieParser('secret'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  maxAge: 1800000

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


/* Global Variables */
app.use((req, res, next) => {
  res.locals.successMessage = req.flash('successMessage');
  res.locals.errorMessage = req.flash('errorMessage');
  res.locals.error = req.flash('error');
  res.locals.user = req.flash('user');
  next();
})

/* DB Connection */
mongoose.connect('mongodb+srv://db-efarming-development:DB@12345@cluster0.p27k7.mongodb.net/efarming-development?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('DB Connection Eshtablished');

}).catch((e => {
  console.log('Erro while Connecting DB', e);
}))


/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.static(path.join(__dirname, './public/upload')));
app.set('view engine', 'ejs');


app.use('/', indexRouter);
// app.use('/user', usersRouter);












app.listen(port, () => {
  console.log('server started at port 4000');
})

const publicIP = require('public-ip');
const dns = require('dns');
const os = require('os');
const ip = dns.getServers();
console.log('>>> Server IP --->>>', ip);
dns.lookupService(ip[0], process.env.port||80,(err, hostname, service) => console.log('>>> Application hostname --->>>', hostname));
const interfaces = os.networkInterfaces();
let addresses = [];
for (let k in interfaces) {
  for (let k2 in interfaces[k]) {
    let address = interfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) {
          addresses.push(address.address);
      }
   }
}
console.log('---------IP address-------', addresses);


const ip1 = require('ip');
console.log('=====IP1=====>>>', ip1.address());

(async ()=>{
console.log('------public IP v4---', await publicIP.v4())

})();
module.exports = app;
