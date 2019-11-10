const mongoose = require('mongoose');
const router = require('express').Router();
const News = mongoose.model('news');

router.post('/', (req, res) => {
  console.log("Posting News");
  console.log(req.body);
  News.create(req.body, (err, news) => {
    console.log("yo");
    if (err) {
      res.send("" + err);
    } else {
      res.send(news);
    }
  });
});

router.get('/', (req, res) => {
  console.log("Getting News");
  News.find({})
    .exec().then((news) => {
    console.log(news);
    res.send(news);
  })
    .catch((err) => {
      res.send("" + err);
    });
});


module.exports = router;
