var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var userRouter = require('./routes/user.route');
var taskRouter = require('./routes/task.route');
var proyectRouter = require ('./routes/proyect.route');
var promiseRouter = require ('./routes/promise.route');

const dbManager = require ("./database.config/database.manager");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/tasks', taskRouter);
app.use('/proyects', proyectRouter);
app.use('/promises', promiseRouter);

dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    // recreate the models if the tables doesn´t exists
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("Database Synced");
      });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = app;
