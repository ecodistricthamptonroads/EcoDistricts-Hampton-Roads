const mongoose = require('mongoose');
const router = require('express').Router();
const Project = mongoose.model('projects');

router.post('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log('Posting Project');
    Project.create(req.body, (err, project) => {
      if (err) {
        res.send('' + err);
      } else {
        res.send(project);
      }
    });
  }
});

router.get('/', (req, res) => {
  console.log('Getting Projects');
  Project.find({})
    .exec()
    .then(project => {
      console.log(project);
      res.send(project);
    })
    .catch(err => {
      res.send('' + err);
    });
});

router.put('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Project.findByIdAndUpdate(req.body._id, req.body,{new: true},function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send(response);
      }
    });
  }
});

router.delete('/:project_id', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Project.findByIdAndRemove(req.params.project_id, function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send({
          message: 'Project with id ' + req.params.project_id + ' removed'
        });
      }
    });
  }
});

module.exports = router;
