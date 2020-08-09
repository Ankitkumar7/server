const http = require('http');
const app = require('./app')
const config = require('./config/development')

const port = config.server.port
const server = http.createServer(app);
server.listen(8181);
