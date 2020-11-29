const mongoose = require('mongoose');
const router = require('express').Router();
const Events = mongoose.model('events');

const checkUser = (req, res, next) => {
  if (!req.user) return res.send('not authorized');
  next();
};

router.post('/', (req, res, next) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    console.log('Posting Event');
    console.log(req.body);
    Events.create(req.body, (err, event) => {
      if (err) {
        res.send('' + err);
      } else {
        res.send(event);
      }
    });
  }
});

router.get('/', (req, res) => {
  console.log('Getting Event');
  Events.find({})
    .exec()
    .then(events => {
      console.log(events);
      res.send(events);
    })
    .catch(err => {
      res.send('' + err);
    });
});

router.get('/:event_id', (req, res) => {
  Events.findById(req.params.event_id, function(err, event) {
    if (err) {
      res.json('' + err);
    } else {
      res.send(event);
    }
  });
});

router.put('/', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Events.findByIdAndUpdate(req.body._id, req.body, { new: true }, function(
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

router.delete('/:events_id', (req, res) => {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    Events.findByIdAndRemove(req.params.events_id, function(err, response) {
      if (err) {
        res.send('' + err);
      } else {
        res.send({
          message: 'Event with id ' + req.params.events_id + ' removed'
        });
      }
    });
  }
});

module.exports = router;
