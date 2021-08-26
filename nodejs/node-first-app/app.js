// third-party dependency
const express = require('express');
const bodyParser = require('body-parser');
// create express application set to app by running express as a function
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(shopRoutes);

// add a catchall middleware
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// })

app.listen(3000);