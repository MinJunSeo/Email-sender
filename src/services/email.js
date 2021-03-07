const { config } = require('../configs');
const { transporter } = require('../repositories');
const { makeUuid } = require('../utils');

class EmailService {
  constructor() {
    this.transporter = transporter;
  }

  async sendEmail(req) {
    try {
      const info = await transporter.sendMail({
        from: `noreply <${config.sender.email}>`,
        to: `${req.body.receiver.name} <${req.body.receiver.email}>`,
        subject: 'Please verify your device',
        html: `
        <p>Hi, ${req.body.receiver.name}!</p>
        <p>A sing in attempt requires further verfication \
        because we did not recognize your device.</p>
        <p>Verfication code: ${makeUuid()}</p>
        `
      });
    } catch (error) {
      console.error(error.message);
      console.error(error.stack);

      error.status = 500;
      error.message = 'Internal Server Error';
      throw error;
    }
  }
}

module.exports = EmailService;