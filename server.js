const http = require('http');
const app = require('./app')
const config = require('./config/development')

const port = config.server.port
const server = http.createServer(app);
server.listen(process.env.PORT || 8080);
// server.listen(8181);


