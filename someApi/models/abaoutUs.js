
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let aboutUsSchema=new Schema({
  content: { type:String,},
  urlImage:{type:String},
  size:{type:Number},
  imageName:{type:String}
}, {
    collection: 'about us'
  })
  let register=new Schema({
  


  })
  
module.exports = mongoose.model('aboutUs', aboutUsSchema)