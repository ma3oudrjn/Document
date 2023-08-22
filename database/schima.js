import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const model=mongoose.model(`user in flower shop`,userSchima) // create new model in data base

const newUser = new model({
name:"masoud",
Age:12,
id:4

})
newUser.save().then((res)=>{
  console.log(res,`user saved`)
  }).catch((err)=>{
  console.log("cant save user");
  console.log(err)
  })





///inam doroste-----        you can also use Joi core mudule
//                  |
//                  |
//                  V


const userSchima = new Schema({

    name:{type:String,required:true},
   Age:{type:Number,required:true},
   id:{type:Number,required:true},
   _X:{}
})
