'use strict'

let Chat = require('../models/chat_model');

let getAll = function (req, res, next) {
  Chat.find()
  .populate('user')
  .exec(function (err, chats) {
    if (err) return res.send(err);
    res.send(chats);
  })
};

let getOne = function (req, res, next) {
  Chat.findOne({_id: req.params.id})
    .populate('user')
    .exec(function (err, chat){
    if(err){
      res.json({error: err});
    } else {
      res.json(chat);
    }
  })
};

let createOne = function (req, res, next) {
  Chat.create({
    text : req.body.text,
    channel : req.body.channel,
    createdAt : new Date(),
    updatedAt : new Date(),
    user: req.body.user
  }, function (error, chat){
    if(error) res.send(error);
    else res.send(chat);
  })
};

let update = function (req, res, next) {
  Chat.findOne({_id: req.params.id}, function (err, chat) {
  if (err) res.send(err);
  else if(!chat) res.send({errors: 'Chat not found'})
  else {

    if(req.body.text) chat.text = req.body.text;
    if(req.body.channel) chat.channel = req.body.channel;

    chat.updatedAt = new Date();
    chat.save(function (err, updatedChat) {
      if (err) res.send(err);
      else res.send(updatedChat);
    });
  }
  });
};

let deleteOne = function (req, res, next) {
  Chat.findOne({_id: req.params.id})
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
