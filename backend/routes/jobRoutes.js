const mongoose = require('mongoose');
const router = require('express').Router();
const Job = mongoose.model('jobs');

router.post('/', (req, res) => {
  console.log('Posting Job');
  Job.create(req.body, (err, job) => {
    if (err) {
      res.send('' + err);
    } else {
      res.send(job);
    }
  });
});

router.get('/', (req, res) => {
  console.log('Getting Jobs');
  Job.find({})
    .exec()
    .then(job => {
      console.log(job);
      res.send(job);
    })
    .catch(err => {
      res.send('' + err);
    });
});

router.delete('/:job_id', (req, res) => {
  Job.findByIdAndRemove(req.params.job_id, function(err, response) {
    if (err) {
      res.send('' + err);
    } else {
      res.send({ message: 'Job with id ' + req.params.job_id + ' removed' });
    }
  });
});

module.exports = router;
