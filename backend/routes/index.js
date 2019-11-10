const express = require('express');
const router = express.Router();

const issue = require('./issueRoutes');
const news = require('./newsRoutes');

router.use('/issue', issue);
router.use('/news', news);

module.exports = router;
