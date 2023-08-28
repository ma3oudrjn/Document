app.put('/api/user/:id',(ereq,res)=>{
    const schema = joi.object({
        name: joi.string().min(3).required(),
        Age: joi.number().min(6).required(),
        id: joi.number().require()
    })
    const {err} = schema.validate({...req.body,userId:req.params.userId})
    if(err)
        return res.status(400).send({message: err.message});
    })



    // Update Student Data
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(

      
      req.params.id,
      {
        $set: req.body,
      },

      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Student updated successfully !");
        }
      }
    );
  });
    
    