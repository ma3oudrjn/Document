const express = require ('express')
let mongoose = require("mongoose")
const app = express()

const aboutusSchema=require('../models/abaoutUs')
router = express.Router();

// create aboute us
router.post("/create/aboutUs", (req, res, next) => {
    aboutusSchema.create(req.body, (err, data) => {
      if (err) {
        return next(err);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });
// get all of them
router.get("/get/aboutus", (req, res) => {
    aboutusSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status
        res.json(data);
      }
    });
  });
  //delete 
  router.delete("/delete/aboutus/:id", 
  (req, res, next) => {
    aboutusSchema.findByIdAndRemove(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });


app.get('/',(res,req)=>{
res.send("API test")
console.log("API");
})
module.exports = router;
