require("dotenv").config();

const express = require ('express');
const app = express();
const jwt = require('jsonwebtoken');
console.log("server run");
app.use(express.json())
const posts = [
{
    username: "naser",
    title: "number 1 user"
},
{
    username: "nader",
    title: "number 2 user"
}]
app.get('/posts',(req,res)=>{
res.json(posts)
})

app.post('/login',(req,res)=>{
const username = req.body.username
const user = {user: username}
const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
res.json=({ accessToken: accessToken })
})



app.listen(3030)
