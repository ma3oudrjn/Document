const express =require('express')
const mongoose = require('mongoose');
let dbConfig = require('./database/db');
const aboutusRoute=require("./routes/auRoutes")
const app = express()
const cors = require('cors')
const PORT = process.env.PORT||7070;

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(cors());
app.use('/aboutus', aboutusRoute)



app.listen(PORT,(err)=>{if(err){
    console.log("err in listening: ",err);
}else{
console.log("conection is perfect 😊");
console.log("you listening to:",PORT," port");
}})