const mongoose = require('mongoose')
const event = new Date();

const commmentShema  = new mongoose.Schema({
title:{type:String},
discrption: {type:String},
bootcampId: {type:mongoose.Schema.Types.ObjectId,
ref:'bootcamps'},
blogId: {type:mongoose.Schema.Types.ObjectId,
    ref:'blog'},
userID:{type: mongoose.Schema.Types.ObjectId,
ref:'users'},

created:{type:String,requird:true,default: event.toISOString()},
updated:{type:String,default: event.toISOString()},
verify:{type:Boolean,default: false}
})
const commentInfo = mongoose.model('comments', commmentShema)
module.exports = commentInfo