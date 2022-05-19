/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1337;

app.use('/', (req, res, next) => {
  console.log(`${req.method} at ${req.url}`);
  next();
});

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`kieran is the coolest and has a server listening on port ${port}`);
});
