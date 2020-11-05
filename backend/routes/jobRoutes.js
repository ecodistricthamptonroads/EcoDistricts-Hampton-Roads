const mongoose = require('mongoose');
const router = require('express').Router();
const Job = mongoose.model('jobs');

router.post('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log('Posting Job');
    Job.create(req.body, (err, job) => {
      if (err) {
        res.send('' + err);
      } else {
        res.send(job);
      }
    });
  }
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

router.get('/:job_id', (req, res) => {
  console.log('Getting Job with ' + req.params.job_id);
  Job.findById(req.params.job_id, function(err, job) {
    if (err) {
      res.json('' + err);
    } else {
      console.log(job);
      res.send(job);
    }
  });
});

router.put('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Job.findByIdAndUpdate(req.body._id, req.body, { new: true }, function(
      err,
      response
    ) {
      if (err) {
        res.send('' + err);
      } else {
        res.send(response);
      }
    });
  }
});

router.delete('/:job_id', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Job.findByIdAndRemove(req.params.job_id, function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send({ message: 'Job with id ' + req.params.job_id + ' removed' });
      }
    });
  }
});

module.exports = router;
