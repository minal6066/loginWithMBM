const userController = require('../controller/userController.js');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .post(userController.oauthRoute)

module.exports = router;