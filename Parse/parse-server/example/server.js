var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/YOUR_DATABASE_NAME',
  cloud: './cloud/main.js', // Provide an absolute path
  appId: 'YOUR_SELF_GENERATED_KEY',
  masterKey: 'YOUR_SELF_GENERATED_KEY', //Add your master key here. Keep it secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
// Hello world
app.get('/', function(req, res) {
  res.status(200).send('Express is running here.');
});
app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});


