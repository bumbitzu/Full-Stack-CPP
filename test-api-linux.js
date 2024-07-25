const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.post('/calculate', (req, res) =>
{
  const { operation } = req.body;

  exec(`echo ${operation} | ./backend/calculator`, (error, stdout, stderr) =>
  {
    if (error)
    {
      console.error(`exec error: ${error}`);
      return res.status(500).send(stderr);
    }
    res.send(stdout);
  });
});

app.listen(port, () =>
{
  console.log(`Server running at http://localhost:${port}/`);
});
