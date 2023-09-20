app.patch('/user/status/:id',async(req,res)=>{
    try{
      const customerId = req.params.id
  const user = await userInfo.findOneAndUpdate({_id:customerId},req.body,{new:true})
  user.status=req.body.status
  user.save()
  res.send(user)
  console.log("status changed!");
  console.log(Date().toString());
    } catch(err){
      console.log(err);
      console.log(Date().toString());
  
    }
  })