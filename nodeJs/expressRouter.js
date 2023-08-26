const express = require('express');
const app = express()
const route= express.Router
const PORT = 3000;
app.listen(PORT,(err)=>{if(err) console.log(err)
    else console.log("you are listen to: ",PORT,'port');
})



