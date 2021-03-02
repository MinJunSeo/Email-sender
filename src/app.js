const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Email sender server listening at 3000 port.');
});