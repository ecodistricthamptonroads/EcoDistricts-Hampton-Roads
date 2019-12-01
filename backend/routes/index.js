const express = require('express');
const router = express.Router();

const issue = require('./issueRoutes');
const news = require('./newsRoutes');
const job = require('./jobRoutes');
const survey = require('./surveyRoutes');
const project = require('./projectRoutes');
const file = require('./fileRoutes');

router.use('/issue', issue);
router.use('/news', news);
router.use('/job', job);
router.use('/survey', survey);
router.use('/project', project);
router.use('/file', file);

module.exports = router;
