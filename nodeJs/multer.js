const express = require('express');
const { date } = require('joi');
const path = require('path')
const app = express();
const multer = require('multer')
const storage=multer.diskStorage({



destination:(req,file,cb)=>{

    cb(null,'./images')
},
filename:(req,file,cb)=>{
    console.log(file);
    cb(null,Date.now()+path.extname(file.originalname))
}
})
const upload=({storage:storage})
app.set("wiew engine", 'ejs')

app.get('/upload',(req,res)=>{
res.render('./views/upload.ejs');
})

app.post('/upload',upload.single('image'),(req,res)=>{
    res.render("image uploaded");
    })

    app.listen(2020);
    console.log("server run ");