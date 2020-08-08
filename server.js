const http = require('http');
const app = require('./app')
const config = require('./config/development')
const express = require('express');
app.use(express.static('./dist/'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/'}
  );
  });
const port = config.server.port
const server = http.createServer(app);
server.listen(process.env.PORT || 8080);
