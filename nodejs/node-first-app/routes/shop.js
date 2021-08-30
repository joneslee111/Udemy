const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    // console.log('In another middleware!');
    // res.send('<h1>Hello from Express</h1>'); // allows us to send a response with a body if we choose
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
