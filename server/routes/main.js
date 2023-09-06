const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "1",
        description: "2"
    };
    res.render('index', {locals});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/contacts', (req, res) =>{
    res.render('contacts');
});

module.exports = router;