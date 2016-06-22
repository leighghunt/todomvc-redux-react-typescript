'use strict';

var express = require('express');
var controller = require('./department.controller');
var winston = require('winston');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
