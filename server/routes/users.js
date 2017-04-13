'use strict'
const express = require('express');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const router = express.Router();
let User = require('../models/user_model');
let controller  = require('../controllers/user_controller');
const passport = require('passport');
let Strategy = require('passport-local').Strategy;
let helpers = require('../helpers/token');
require('dotenv').config()

/* GET home page. */
router.get('/', helpers.authenticate,   controller.getAll);
router.get('/:id', helpers.authenticate,  controller.getOne);
router.post('/', controller.createOne);
router.put('/:id', helpers.authenticate,  controller.update);
router.delete('/:id', helpers.authenticate,  controller.deleteOne);

passport.use(new Strategy(
  function(username,password,cb){
    User.findOne({username: username}, function (err, user) {
    if (err) cb(err);
    else {
    let isVerify = passwordHash.verify(password, user.password);
    if(isVerify){
      let token = jwt.sign({
        // id: user._id,
        username: username
        // name: user.name
        },
        process.env.SECRET,
        {expiresIn: '1h'});
      let data = {token: token,
                  user: {
                    id: user._id,
                    username: username,
                    name: user.name
                  }}
      cb(null, data);
    } else {
      cb("Username or Password not match!");
    }
  }
  })
  }
));

router.use(passport.initialize());

router.post('/login', passport.authenticate('local', {session:false}), function(req,res){
  res.send(req.user);
})

module.exports = router;
