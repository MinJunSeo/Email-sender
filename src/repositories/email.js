const nodemailer = require('nodemailer');
const { config } = require('../configs');

const transporter = nodemailer.createTransport({
  service: 'naver',
  host: 'smtp.naver.com',
  secure: true,
  auth: {
    user: config.sender.email,
    pass: config.sender.password
  }
});

module.exports = transporter;