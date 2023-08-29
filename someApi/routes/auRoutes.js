const express = require ('express')
let mongoose = require("mongoose")
const app = express()
const multer = require('multer')
const upload = multer({ dest: "uploads/" });

const aboutusSchema=require('../models/abaoutUs')
router = express.Router();

// create aboute us
app.post("/upload_image", upload.array("recfile"), uploadFiles);

function uploadFiles(req, res) {
	console.dir(req.body);
	console.log(req.files);
	res.json({ message: "Successfully uploaded files" });
}



// get all of them
router.get("/get/aboutus", (req, res) => {
  
    aboutusSchema.find((error, data,next) => {

      if (error) {
        return next(error);
      } else {
        res.status(200)
        res.json(data);
      }
    });
  });
  //delete 
  router.delete("/delete/aboutus/:id", (req, res, next) => {
    aboutusSchema.findByIdAndRemove(
        req.params.id, (error, data) => {
      if (err){
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
});




app.get('/',(req,res)=>{
res.send("API test")
console.log("API");


})


// app.post("/upload", upload.single("myFile"), (req, res) => {
//   console.log("Body: ", req.body);
//   console.log("File: ", req.file);
//   res.send("File successfully uploaded.");
// });
module.exports = router;
