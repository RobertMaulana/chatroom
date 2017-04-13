'use strict'
//All Dependencies
const express = require('express'),
      CronJob = require('cron').CronJob,
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      kue = require('kue'),
      queue = kue.createQueue(),
      cors	= require('cors'),
      //All Route Files
      routes = require('./routes/index'),
      users = require('./routes/users'),
      chats = require('./routes/chats'),
      channels = require('./routes/channels'),

      //Express Instance
      app = express();

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messenger', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/users', users);
app.use('/chats', chats);
app.use('/channels', channels);

app.listen(3000);

// new CronJob('1 * * * * *', function() {
//   console.log('You will see this message every minute');
// }, null, true, 'Asia/Jakarta');













module.exports = app;
