'use strict'

const password = require('password-hash');
let User = require('../models/user_model');

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
    if(error) res.send(error);
    else res.send(user);
  })
};

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
