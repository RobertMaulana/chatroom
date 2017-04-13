'use strict'

const password  = require('password-hash'),
      moment    = require("moment"),
      CronJob   = require('cron').CronJob,
      kue       = require('kue'),
      queue     = kue.createQueue(),
      User      = require('../models/user_model'),
      AWS       = require('aws-sdk');
require('dotenv').config()

let getAll = function (req, res, next) {
  User.find()
  .exec(function (err, users) {
    if (err) return res.send(err);
    res.send(users);
  })
};

let getOne = function (req, res, next) {
  User.findOne({_id: req.params.id})
    .exec(function (err, user){
    if(err){
      res.json({error: err});
    } else {
      res.json(user);
    }
  })
};

let createOne = function (req, res, next) {
  // Creating hash
  let hashPassword = password.generate(req.body.password);
  User.create({
    username : req.body.username,
    password : hashPassword,
    name : req.body.name,
    phone : req.body.phone,
    birthdate: req.body.birthdate,
    createdAt : new Date(),
    updatedAt : new Date()
  }, function (error, user){

    if(error){
      res.send(error)
    }else{
      sendMessageNotifNewUser(user.phone);
      sendMessageBirthday(user.birthdate, user.phone);
      res.send(user);
    }
  })
};

function sendMessageNotifNewUser(phoneNumber){

  let phone = phoneNumber.split("");
  phone.shift();
  phone.unshift("+62");
  let phoneNumberFormat = phone.join("");

  var sns = new AWS.SNS({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey:process.env.AWS_SECRET,
    region: 'us-west-2'
  })

  let randomCode = Math.round(Math.random() * 1000000);

  let params = {
    Message: `congratulations! you have registered in our chatroom. As our gratitude, if you want to eat at KFC, you can redeem the following code: CH-${randomCode}  to get a piece of a 30% discount all items at KFC`,
    MessageStructure: 'string',
    PhoneNumber: phoneNumberFormat
  }

  sns.publish(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
  console.log("Appreciate Bot is running");
}

function sendMessageBirthday(birthdate, phoneNumber){

  let date = moment(birthdate).format("YYYY MM DD").split(" ");
  let month = date[1];
  let day = date[2];

  let phone = phoneNumber.split("");
  phone.shift();
  phone.unshift("+62");
  let phoneNumberFormat = phone.join("");

  var sns = new AWS.SNS({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey:process.env.AWS_SECRET,
    region: 'us-west-2'
  })

  // new CronJob('00 1 0 */'+day+' */'+month+' *', function() {
  new CronJob('* * * * * *', function() {

    var message = queue.create('sendSMS', {
      Message: 'this is a test message',
      MessageStructure: 'string',
      PhoneNumber: phoneNumberFormat
    })
    .save(function(err){
      if(err) console.log( err.message );
    });
    queue.process('sendSMS', function(message, done){
      sendSMS(message.data)
      done()
    });
  }, null, true, 'Asia/Jakarta');

  function sendSMS(params){
    sns.publish(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
  }
  console.log("Birthday Bot is running!");
}

let update = function (req, res, next) {
  User.findOne({_id: req.params.id}, function (err, user) {
  if (err) res.send(err);
  else if(!user) res.send({errors: 'User not found'})
  else {
    if(req.body.password){
      // Creating hash
      let hashPassword = password.generate(req.body.password);
      user.password = hashPassword;
    }

    if(req.body.username) user.username = req.body.username;
    if(req.body.name) user.name = req.body.name;
    if(req.body.phone) user.phone = req.body.phone;
    if(req.body.birthdate) user.birthdate = req.body.birthdate;

    user.updatedAt = new Date();
    user.save(function (err, updatedUser) {
      if (err) res.send(err);
      else res.send(updatedUser);
    });
  }
  });
};

let deleteOne = function (req, res, next) {
  User.findOne({_id: req.params.id})
  .remove(function(err, respond){
    if(err) res.send(err);
    else res.send(respond);
  })
};


module.exports = {
  getAll,
  getOne,
  createOne,
  update,
  deleteOne
}
