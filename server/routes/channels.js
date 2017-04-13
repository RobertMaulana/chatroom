'use strict'
const express = require('express');
const router = express.Router();
let controller  = require('../controllers/channel_controller');
let helpers = require('../helpers/token');

/* GET home page. */
router.get('/', helpers.authenticate,  controller.getAll);
router.get('/:id', helpers.authenticate, controller.getOne);
router.post('/', helpers.authenticate, controller.createOne);
router.put('/:id', helpers.authenticate, controller.update);
router.delete('/:id', helpers.authenticate, controller.deleteOne);

module.exports = router;
