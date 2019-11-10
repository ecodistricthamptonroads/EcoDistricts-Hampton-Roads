const mongoose = require('mongoose');
const router = require('express').Router();
const Issue = mongoose.model('issues');

router.post('/', (req, res) => {
  console.log("Posting Issues");
  console.log(req.body);
  Issue.create(req.body, (err, issue) => {
    console.log("yo");
    if (err) {
      res.send("" + err);
    } else {
      res.send(issue);
    }
  });
});

router.get('/', (req, res) => {
  console.log("Getting Issues");
  Issue.find({})
    .exec().then((issue) => {
      console.log(issue);
      res.send(issue);
    })
    .catch((err) => {
      res.send("" + err);
    });
});


module.exports = router;
