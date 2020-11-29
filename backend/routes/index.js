const express = require('express');
const router = express.Router();

const auth = require('./authRoutes');
const issue = require('./issueRoutes');
const news = require('./newsRoutes');
const job = require('./jobRoutes');
const event = require('./eventRoutes');
const survey = require('./surveyRoutes');
const project = require('./projectRoutes');
const file = require('./fileRoutes');
const email = require('./emailRoutes');

const checkUser = (req, res, next) => {
  if (!req.user) return res.send('not authorized');
  next();
};

router.use('/auth', auth);
router.use('/issue', issue);
router.use('/news', news);
router.use('/job', job);
router.use('/survey', survey);
router.use('/project', project);
router.use('/file', file);
router.use('/email', email);
router.use('/event', event);

module.exports = router;
