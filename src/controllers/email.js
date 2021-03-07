const EmailService = require('../services/email');

class EmailController {
  static async sendEmail(req, res, next) {
    await new EmailService().sendEmail(req);
    res.status(200).send('Success to send a email.');
  }
}

module.exports = EmailController;