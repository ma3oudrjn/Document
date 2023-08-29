const express = require('express')
const app = express()
const mongoose= require('mongoose')
const user = require('../models/user');
ap = express.Router();

//new user
ap.post('/new/user',(req,res,next)=>{
    user.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json(data);
        }
      });
    });


//delete user
    ap.delete("/delete/user/:id", 
    (req, res, next) => {
      user.findByIdAndRemove(
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

      module.exports = ap;