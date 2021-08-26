const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log('Another middleware');
    res.send('<form action="/add-product" method="POST"><input tyoe="text" name="title"><button type="submit">Add Product</button></form>')
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
