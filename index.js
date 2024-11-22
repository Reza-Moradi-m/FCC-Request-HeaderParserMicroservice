// index.js
var express = require('express');
var app = express();

// Enable CORS for cross-origin requests
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Root endpoint to serve the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint to handle the request
app.get('/api/whoami', (req, res) => {
  // Extract required information from the request headers
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  // Send the response in JSON format
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

// Start the server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
