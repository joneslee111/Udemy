const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET 
router.get('/add-product', (req, res, next) => {
    // console.log('Another middleware');
    // res.send('<form action="/add-product" method="POST"><input tyoe="text" name="title"><button type="submit">Add Product</button></form>')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST 
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
