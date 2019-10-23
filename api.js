const express = require('express')

const port = 8000;

const app = express();

app.get('/api', (req, res) => {
  res.json({ response: 'OK!' });
});

app.listen(port, err => {
  return console.log(`server is listening on ${port}`);
});