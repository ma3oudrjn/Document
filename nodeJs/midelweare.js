const express = require('express')
const app = express()

app.use((req,res,next)=>{
console.log("app run!");
next()
})

app.use(express.json())
// this is run at the first off all program