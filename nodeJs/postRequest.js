
const express = require('express')
const app=express()
app.use(express.json())                                                                   //request body to json


app.post('/api/createUser',(req,res)=>{
    const user={
    id:users[users.length-1].id+1,
    name:req.body.name,
    Age:req.body.Age
    };
    users.push(user);
    res.send(users);
    });
    

//good example___
//                 |
//                 |
//                 V 

app.post('/api/createUser',(req,res)=>{
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
