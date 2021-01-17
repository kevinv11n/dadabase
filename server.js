require ('dotenv').config ();

const express = require ('express'); // Use Express to help build server app
const path = require ('path'); // Use path to help with directory paths
const bodyParser = require ('body-parser'); // Use body-parser to help parse POST JSON objects
const api = require ('./src/api'); // Routes for base server API
const url = require ('./src/url');

const app = express ();
const PORT = process.env.PORT;

app.use (bodyParser.urlencoded ({extended: true}));
app.use (express.static (path.join (__dirname, 'public')));
app.use ('/', url);
app.use ('/api', api);

app.get ('*', function (req, res) {
  res.status (404).sendFile (path.join (__dirname, 'public') + '/dad_404.html');
});

app.listen (PORT, err => {
  if (err) throw err;
  const hostname = 'localhost';
  console.log (`application listenting on http://${hostname}:${PORT}`);
});
