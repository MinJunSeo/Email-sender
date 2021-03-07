const router = require('express').Router();
const { TryCatchMiddleware, validate } = require('../middlewares');
const { EmailController } = require('../controllers');
const { emailSchema } = require('../schemas');

router.get(
  "/",
  validate({ schema: emailSchema }),
  TryCatchMiddleware.Error(EmailController.sendEmail)
);

module.exports = router;