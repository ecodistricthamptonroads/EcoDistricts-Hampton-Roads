const mongoose = require('mongoose');
const router = require('express').Router();
const Survey = mongoose.model('survey');

router.post('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
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
  }
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

router.delete('/:survey_id', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Survey.findByIdAndRemove(req.params.survey_id, function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send({
          message: 'Survey with id ' + req.params.survey_id + ' removed'
        });
      }
    });
  }
});

module.exports = router;
