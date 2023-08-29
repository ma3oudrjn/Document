const express = require('express')
const mongoose = require('mongoose');
// let dbConfig = require('./database/db');
const aboutusRoute=require("./routes/auRoutes")
const app = express()
const cors = require('cors');
var multer = require('multer');

app.use(express.urlencoded({ extended: true }));
const upload = multer({ dest: 'uploads/' })


const PORT = process.env.PORT||7070;
app.use(express.json())
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017').then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)


app.use(cors());
 app.use( aboutusRoute)






app.listen(PORT,(err)=>{if(err){
    console.log("err in listening: ",err);
}else{
console.log("conection is perfect 😊");
console.log("you listening to:",PORT," port");
}})