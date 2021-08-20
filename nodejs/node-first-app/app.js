// core modules
const http = require('http');
// third-party dependency
const express = require('express');
// create express application set to app by running express as a function
const app = express();
// use method 
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // next is a function that allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>'); // allows us to send a response with a body if we choose
});

// app is a valid request handler so can be passed to createServer
const server = http.createServer(app);

server.listen(3000);