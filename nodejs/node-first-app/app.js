// third-party dependency
const express = require('express');
const bodyParser = require('body-parser');
// create express application set to app by running express as a function
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// add a catch all route
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(3000);
