
const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');
const Schema = mongoose.Schema;
  
let abaoutUsSchema=new Schema({
  content: { type:String,},
  urlImage:{type:String},
  size:{type:NUMBER},
  imageName:{type:String}
}, {
    collection: 'about us'
  })
  
module.exports = mongoose.model('aboutUs', aboutUsSchema)