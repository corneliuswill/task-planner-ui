const express = require('express');
const cors = require('cors');

let args = process.argv.slice(2);
let config = require('./config.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
});

// Get routes
require('./routes/index.js')(app);

app.use((req, res, next) => {
    res.status(404).send({
      error: "Invalid Request.  Resource not found."
    })
});

app.get('*', (req, res) => {
  res.end('Mock Server is running but no matching route was found.');
});

app.listen(config.port, () => {
  console.log('\x1b[32m', `Server listening on port ${config.port}, Ctrl+C to stop`, '\x1b[0m\n');
  console.log('\x1b[32m', 'Available Routes:', '\x1b[0m\n');
});
