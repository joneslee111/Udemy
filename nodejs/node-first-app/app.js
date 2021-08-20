// core modules
const http = require('http');
// third-party dependency
const express = require('express');
// create express application set to app by running express as a function
const app = express();
// app is a valid request handler so can be passed to createServer
const server = http.createServer(app);

server.listen(3000);