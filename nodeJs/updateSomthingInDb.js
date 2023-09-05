roter.get('/tteesstt/:id',(req,res)=>{
    productSchema.findById(req.params.id).then((data)=>{
    data.price=--data.price
    data.save();
    console.log(data);
    }).catch((err)=>{
    console.log(err);
    })

    })