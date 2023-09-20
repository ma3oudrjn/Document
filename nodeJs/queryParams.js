app.get('/filtertby', async(req, res) => {
    const q  =req.query
    res.send(await userInfo.find(q));

  });