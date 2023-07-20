const express = require('express');

const router = express.Router();

const activitiesRouter = require('./activities.router');

router.use(activitiesRouter);

module.exports = router;
