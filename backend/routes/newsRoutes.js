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

router.get('/:news_id', (req, res) => {
  News.findById(req.params.news_id, function(err, news) {
    if (err) {
      res.json('' + err);
    } else {
      res.send(news);
    }
  });
});

module.exports = router;
