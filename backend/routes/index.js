const express = require('express');
const router = express.Router();

const issue = require('./issueRoutes');
const news = require('./newsRoutes');
const job = require('./jobRoutes');

router.use('/issue', issue);
router.use('/news', news);
router.use('/job', job);

module.exports = router;
