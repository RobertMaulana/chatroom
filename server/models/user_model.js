'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  phone: String,
  birthdate: Date,
  createdAt: Date,
  updatedAt: Date
});

//the schema is useless so far
//we need to create a model using it
let User = mongoose.model('User', userSchema);

//make this available to our users in our Node Applications
module.exports = User;
