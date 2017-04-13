'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let channelSchema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date
});

//the schema is useless so far
//we need to create a model using it
let Channel = mongoose.model('Channel', channelSchema);

//make this available to our users in our Node Applications
module.exports = Channel;
