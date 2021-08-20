const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('This is also me adding something to the console');
    res.send('<p>My second responses</p>')
});

app.use('/', (req, res, next) => {
    console.log('This is me adding something to the console');
    res.send('<h1>My Assignment Title</h1>');
});

app.listen(3000);
