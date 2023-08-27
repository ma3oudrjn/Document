
const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');
const Schema = mongoose.Schema;
  
let aboutUsSchema = new Schema({
  content: { type:String,},
  urlImage:{type:String},
  size:{type:Number},
  imageName:{type:NUMBER}
}, {
    collection: 'about us'
  })
  
module.exports = mongoose.model('aboutUs', aboutUsSchema)