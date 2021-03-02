const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create a testing account.');
    console.error(err.message);
    return process.exit(1);
  }

  console.log('Credentials obtained, sending message...');

  const transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.post,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass
    }
  });

  const message = {
    from: "noreply <noreply@email.com>",
    to: "MinJun Seo <minjunseo@email.com>",
    subject: "Test",
    text: "Hello to myself!",
    html: "<p><b>Grave</b> for me!</p>"
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error('Failed to send a email.');
      console.error(err.message);
    }

    console.log(`Message sent: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
});