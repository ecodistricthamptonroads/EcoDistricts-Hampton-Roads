const mongoose = require('mongoose');
const router = require('express').Router();
const Email = mongoose.model('emails');

router.post('/', (req, res, next) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log('Posting Email');
    console.log(req.body);
    Email.create(req.body, (err, email) => {
      console.log('yo');
      if (err) {
        res.send('' + err);
      } else {
        res.send(email);
      }
    });
  }
});

router.get('/', (req, res) => {
  console.log('Getting Email');
  Email.find({})
    .exec()
    .then(email => {
      console.log(email);
      res.send(email);
    })
    .catch(err => {
      res.send('' + err);
    });
});

router.get('/:email', (req, res) => {
  Email.findOne({ email: req.params.email }, function(err, email) {
    if (err) {
      res.json('' + err);
    } else {
      console.log(email);
      res.send(email);
    }
  });
});

router.delete('/:email_id', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Email.findByIdAndRemove(req.params.email_id, function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send({
          message: 'Email with id ' + req.params.email_id + ' removed'
        });
      }
    });
  }
});

module.exports = router;
