// call the core module for creating a server
const http = require('http');

// require the routes file that stores all of the routes
const routes = require('./routes.js');

// call the createserver method with the argument of routes as above
const server = http.createServer(routes);

// call server listen with the port you want to use
server.listen(3000);