const express = require('express');
const Comment = require('./models/comment')
const app = express();
const Redis = require('redis');
const connection = Redis.createClient();
const cors = require('cors');
app.use(cors());
const time_of_conection= 100
connection.on('error', err => console.log('Redis Client Error', err));

const db = require('mongoose')
const dbName = "Faradid"
db.connect('mongodb://localhost:27017/',{dbName})
.then(()=>{
console.log("you are connect")
}).catch((err)=>{
console.log("eror to connect to the data base",err)
})



app.get('/photo/:id', async (req, res) => {
  try {
    await connection.connect();
    const comment = await Comment.find({})

    const x = await connection.exists('key',(err,reply)=>{
        if(err){
            console.log(err);
        }if(!reply){
console.log("naaaaser");
        }
    })

    connection.setEx('key',time_of_conection,JSON.stringify(comment));
    const value = await connection.get('key');

    res.status(200).json(value);
    await connection.disconnect();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 4000;
app.listen(port, (err) => {
  if (err) {
    console.error('Server not running:', err);
  } else {
    console.log(`Server running on port: ${port}`);
  }
});
