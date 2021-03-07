const router = require('express').Router();
const { TryCatchMiddleware } = require('../middlewares');
const { EmailController } = require('../controllers');

router.get(
  '/email',
  TryCatchMiddleware.Error(EmailController.sendEmail)
);

module.exports = router;