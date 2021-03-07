const express = require('express');

const app = express();
const { config } = require('./configs');
const { ApiNotFound } = require('./exceptions');
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.use((req, res, next) => {
  next(ApiNotFound);
});

app.use((err, req, res, next) => {
  console.error(`${err.status}: ${err.message}`);
  res.status(err.status || 500);
  res.json({ message: err.message });
});

app.listen(config.server.port, () => {
  console.log(`Email sender server listening at ${config.server.port}.`);
});