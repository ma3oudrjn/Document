const express = require('express')
const app = express();
app.set("wiew engine", 'ejs')

app.get('/upload',(req,res)=>{
res.render('/');
})

app.post('/upload',(req,res)=>{
    res.render("image uploaded");
    })

    app.listen(2020);
    console.log("server run ");