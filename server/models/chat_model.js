'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let chatSchema = new Schema({
  text: String,
  channel: String,
  createdAt: Date,
  updatedAt: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' },
  username: String
});

//the schema is useless so far
//we need to create a model using it
let Chat = mongoose.model('Chat', chatSchema);

//make this available to our users in our Node Applications
module.exports = Chat;
