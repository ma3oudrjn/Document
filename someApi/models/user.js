
const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
  
let userSchema=new Schema({
userName: joi.string().min(6).max(12).required(),
phone: joi.number().max(11).min(11).required(),
pass: joi.string().min(6).max(12).required().pattern(new RegExp('^(\\+98|0)?9\\d{9}$')),
isLogin: joi.boolean().required()
}, {
    collection: 'user'
  })

module.exports = mongoose.model('user', userSchema)