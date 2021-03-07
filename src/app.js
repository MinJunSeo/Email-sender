const express = require('express');

const app = express();
const { config } = require('./configs');
const { ApiNotFound } = require('./exceptions');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next(ApiNotFound);
});

app.use((err, req, res, next) => {
  console.error(`${err.status}: ${err.message}`);
});

app.listen(config.server.port, () => {
  console.log(`Email sender server listening at ${config.server.port}.`);
});