
const requestHandler = (req, res) => {
    // this is whatever the user enters after local:host3000
    const url = req.url;
    // this stores the request method header as a const
    const method = req.method;
    // if the user inputs a / 
    if (url === '/') {
        // send a response and setheader and tell the browser it'll html to follow
        res.setHeader('Content-Type', 'text/html');
        // the following is the written response for the html
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body>');
        res.write('<h1>Hello There</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>')
        res.write('</body>');
        res.write('</html>');
        // return isnt needed as there is no res.write code outside of the following if statement that can be accessed
        return res.end();
    }
    // this checks to see if the url has /users in it
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Dummy Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    // this checks to see if the url has /create-user and is a POST method
    if (url === '/create-user' && method === 'POST') {
        // an array to store chunks coming in
        const body = [];
        // registering the data & end events 
        req.on('data', (chunk) => {
            // this adds chunk to the body array
            body.push(chunk);
        });
        // we now know the data has been read and added to the body array
        req.on('end', () => {
            // below takes the body and creates a new Buffer based on the body
            // concat allows you to create one buffer for all of the chunks
            // tostring converts it to a string value
            const parsedBody = Buffer.concat(body).toString();
            // parsedBody.split('=')[1] splits the parsed body on the = sign
            // array starts with an index of 0 which would be on the left of the = sign so we need 1
            const message = parsedBody.split('=')[1];
            // prints above message
            console.log(message);
        });
    // a redirected status code
    res.statusCode = 302;
    // sets header and tells browser where to redirect to
    res.setHeader('Location', '/');
    res.end();
    }
};

module.exports = requestHandler;