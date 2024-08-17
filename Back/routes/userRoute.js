const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');
const { limiter } = require('../middleware/ratelimit');

router.post('/signup', limiter, userController.signup);
router.post('/login', limiter, userController.login);

module.exports = router;



