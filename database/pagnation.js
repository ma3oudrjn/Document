//pagenashon test
app.get("/posts/:pagee/:limitt", async (req, res) => {
    const page=req.params.pagee
    const limit=req.params.limitt
  
    try {
      const posts = await userInfo.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
 
      const count = await userInfo.countDocuments();
  
      res.json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } catch (err) {
      console.error(err.message);
    }
  });
  //just exmple