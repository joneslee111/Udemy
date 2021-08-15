// const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Gretings</title></head>');
        res.write('<body><h1>Hello There</h1></body>');
        res.write('</html>')
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Dummy Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }



};

module.exports = requestHandler;