const db = require('mongoose')
db.connect("mongodb+srv://ma3oud:138162@cluster0.irtsiue.mongodb.net/")
.then(()=>{
console.log("you are connect")
}).catch((err)=>{
console.log("eror to connect to the data base",err)
})