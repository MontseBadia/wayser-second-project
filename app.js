'use strict';

// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const servicesRouter = require('./routes/services');
const profileRouter = require('./routes/profile');

const app = express();

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const dbName = 'wayer-db';
mongoose.connect(`mongodb://localhost/${dbName}`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// antes de las rutas

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(flash());

app.use(function (req, res, next) {
  app.locals.currentUser = req.session.currentUser;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/services', servicesRouter);
app.use('/profile', profileRouter);

// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

module.exports = app;
