const express = require('express');
const router = express.Router();

const issue = require('./issueRoutes');

router.use('/issue', issue);

module.exports = router;
