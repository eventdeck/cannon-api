var Boom = require('boom');
var User = require('server/db/user');
var log = require('server/helpers/logger');
var jwt = require('jsonwebtoken');
var tokenConfig = require('config').auth.token;
var Token = require('server/auth/token');

var basic = function(username, password, cb){
  Token.validator(password, tokenConfig, cb);
};

var bearer = function(token, cb){
  Token.validator(token, tokenConfig, cb);
};



exports.bearer = bearer;
exports.basic = basic;