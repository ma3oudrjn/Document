const express = require('express');
const db = require('mongoose')
const app= express()
const joi = require('joi');
const mongoose = require('mongoose');
const port = process.env.port || 3010;                                                 //enviroment object  #env
app.use(express.json())                                                                   //request body to json



    var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({apikey: '356631584F64534F72304E5A4E7867635A42564945384B77306D50745A2F394E776F2F4D577930564D50493D'});
api.Send({ message: "masoud hii" , sender: "1000689696" , receptor: "09305501381" });

const { Schema } = mongoose;

db.connect('mongodb+srv://ma3oud:138162@cluster0.irtsiue.mongodb.net/flower_shop_main')
.then(()=>{
    console.log("connect to Data Base...")
}).catch((err)=>{
console.log("err to conect database");
})
const userSchima = new Schema({

    name:{type:String,required:true},
   Age:{type:Number,required:true},
   id:{type:Number,required:true}
})

const model=mongoose.model(`user in flower shop`,userSchima)
const newUser = new model({
name:"mohamad",
Age:34,
id:1
})

newUser.save().then((res)=>{
console.log(res,`user saved`)
}).catch((err)=>{
console.log("cant save user");
console.log(err)
})

app.get('/',(req,res)=>{
res.send("wellcome to my flower store",)
})

app.get('/api/getParams/:id',(req,res)=>{
 const userFind=users.find(item=>item.id==req.params.id)                              //find user from request
 if(!userFind){res.send('user not find')}
 else{res.send(userFind)}
    console.log(`params:`,req.params);                                                //params this parameter :id read on api
})


app.post('/api/createUser',(req,res)=>{
    joi.object({name: joi.string})                                                          // create format and schema for request in joi
if (!req.body.name || req.body.name.length<3){ return res.status(400),res.send('chek input')}
if (!req.body.Age || req.body.Age<6){return res.status(400), res.send('Age must be haigher')}
else{
const user={
id:users[users.length-1].id+1,

name:req.body.name,
Age:req.body.Age
};
users.push(user);
res.send(users);
}})


app.put('/api/user/:id',(req,res)=>{
const schema = joi.object({
    name: joi.string().min(3).required(),
    Age: joi.number().required(),
    id: joi.number().required()
})
const {err} = schema.validate({...req.body,userId:req.params.userId})
if(err)
    return res.status(400).send({message: err.message});
})







app.listen(port,(err)=>{
    if(err){console.log(err);}
    else{
console.log("you listening on :",port,'port')}
console.log(``);
})