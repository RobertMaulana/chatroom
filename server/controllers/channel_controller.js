'use strict'

let Channel = require('../models/channel_model');

let getAll = function (req, res, next) {
  Channel.find()
  .exec(function (err, channels) {
    if (err) return res.send(err);
    res.send(channels);
  })
};

let getOne = function (req, res, next) {
  Channel.findOne({_id: req.params.id})
    .exec(function (err, channel){
    if(err){
      res.json({error: err});
    } else {
      res.json(channel);
    }
  })
};

let createOne = function (req, res, next) {
  Channel.create({
    name : req.body.name,
    createdAt : new Date(),
    updatedAt : new Date()
  }, function (error, channel){
    if(error) res.send(error);
    else res.send(channel);
  })
};

let update = function (req, res, next) {
  Channel.findOne({_id: req.params.id}, function (err, channel) {
  if (err) res.send(err);
  else if(!channel) res.send({errors: 'Channel not found'})
  else {

    if(req.body.text) channel.name = req.body.name;

    channel.updatedAt = new Date();
    channel.save(function (err, updatedChannel) {
      if (err) res.send(err);
      else res.send(updatedChanel);
    });
  }
  });
};

let deleteOne = function (req, res, next) {
  Channel.findOne({_id: req.params.id})
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
