const mongoose = require('mongoose');
const router = require('express').Router();
const News = mongoose.model('news');

const checkUser = (req, res, next) => {
  if (!req.user) return res.send('not authorized');
  next();
};

router.post('/', (req, res, next) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log('Posting News');
    console.log(req.body);
    News.create(req.body, (err, news) => {
      console.log('yo');
      if (err) {
        res.send('' + err);
      } else {
        res.send(news);
      }
    });
  }
});

router.get('/', (req, res) => {
  console.log('Getting News');
  News.find({})
    .exec()
    .then(news => {
      console.log(news);
      res.send(news);
    })
    .catch(err => {
      res.send('' + err);
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

router.put('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    News.findByIdAndUpdate(req.body._id, req.body,{new: true},function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send(response);
      }
    });
  }
});

router.delete('/:news_id', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    News.findByIdAndRemove(req.params.news_id, function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send({
          message: 'News with id ' + req.params.news_id + ' removed'
        });
      }
    });
  }
});

module.exports = router;
