var express = require('express');
var router = express.Router();

var users = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mattia' });
});

/* GET /admin/users */
router.get('/admin/users', function(req, res, next) {
  res.render('users', { 
    users: users,
    title: 'List all users' });
});

/* GET /register Registration page */
router.get('/register', function(req, res, next) {
  res.render('register', {
    name: '',
    surname: '',
    title: 'Register page' });
});

/* POST /register Registration page */
router.post('/register', function(req, res, next) {
  users[req.body.email] = req.body;

  res.render('register', { 
    title: 'User registration',
    name: req.body.name,
    surname: req.body.surname});
});




module.exports = router;
