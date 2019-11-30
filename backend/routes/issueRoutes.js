const mongoose = require('mongoose');
const router = require('express').Router();
const Issue = mongoose.model('issues');

router.post('/', (req, res) => {
  console.log('Posting Issues');
  console.log(req.body);
  Issue.create(req.body, (err, issue) => {
    console.log('yo');
    if (err) {
      res.send('' + err);
    } else {
      res.send(issue);
    }
  });
});

router.get('/', (req, res) => {
  console.log('Getting Issues');
  Issue.find({})
    .exec()
    .then(issue => {
      console.log(issue);
      res.send(issue);
    })
    .catch(err => {
      res.send('' + err);
    });
});

router.delete('/:issue_id', (req, res) => {
  Issue.findByIdAndRemove(req.params.issue_id, function(err, response) {
    if (err) {
      res.send('' + err);
    } else {
      res.send({
        message: 'Issue with id ' + req.params.issue_id + ' removed'
      });
    }
  });
});

module.exports = router;
