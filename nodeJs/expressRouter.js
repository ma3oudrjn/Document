const express = require('express');
const app = express()
const router= express.Router
const PORT = 3000;

router.get('/', function (req, res, next) {
    console.log("Router Working");
    res.end();
})
 
app.use(router);
app.listen(PORT,(err)=>{if(err) console.log(err)
    else console.log("you are listen to: ",PORT,'port');
})



