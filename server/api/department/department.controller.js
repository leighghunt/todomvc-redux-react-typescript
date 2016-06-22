'use strict';

var _ = require('lodash');
//var Department = require('./department.model');

var async = require("async");
var winston = require('winston');

var departments = [
  {
    name:'Department A',
    description: 'This is Department A'},
  {
    name:'Department B',
    description: 'This is Department C'},
]

exports.index = function(req, res) {
  return res.status(200).json(departments);
};
