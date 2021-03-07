const router = require('express').Router();
const { TryCatchMiddleware, validate } = require('../middlewares');
const { EmailController } = require('../controllers');

router.get(
  "/",
  validate,
  TryCatchMiddleware.Error(EmailController.sendEmail)
);

module.exports = router;