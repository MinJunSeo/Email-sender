const nodemailer = require('nodemailer');
const { senderEmail, senderPassword } = require('../configs/email');

const transporter = nodemailer.createTransport({
  service: 'naver',
  host: 'smtp.naver.com',
  secure: true,
  auth: {
    user: senderEmail,
    pass: senderPassword
  }
});

module.exports = transporter;