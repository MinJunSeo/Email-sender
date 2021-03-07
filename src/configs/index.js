require('dotenv').config();

exports.config = {
  sender: {
    email: process.env.SENDER_EMAIL || "",
    password: process.env.SENDER_PASSWORD || ""
  },
  server: {
    port: Number(process.env.SERVER_PORT)
  }
};