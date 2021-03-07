const router = require('express').Router();
const EmailRouter = require('./email');

router.use('/email', EmailRouter);

module.exports = router;