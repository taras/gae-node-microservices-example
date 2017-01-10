"use strict";

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Main app: Hello, world!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`service-2 server listening on port ${PORT}`);
});