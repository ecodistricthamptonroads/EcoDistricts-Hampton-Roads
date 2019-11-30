const mongoose = require('mongoose');
const router = require('express').Router();
const Survey = mongoose.model('survey');

router.post('/', (req, res) => {
  console.log('Posting Survey');
  console.log(req.body);
  Survey.create(req.body, (err, survey) => {
    console.log('yo');
    if (err) {
      res.send('' + err);
    } else {
      res.send(survey);
    }
  });
});

router.get('/', (req, res) => {
  console.log('Getting Survey');
  Survey.find({})
    .exec()
    .then(survey => {
      console.log(survey);
      res.send(survey);
    })
    .catch(err => {
      res.send('' + err);
    });
});
