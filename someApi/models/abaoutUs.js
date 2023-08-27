
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let aboutUsSchema = new Schema({
  content: { type:String},
  urlImage:{type:String}
}, {
    collection: 'about us'
  })
  
module.exports = mongoose.model('aboutUs', aboutUsSchema)