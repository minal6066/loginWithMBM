const userController = require('../controller/userController.js');
const express = require('express');
const router = express.Router();
router
    .route('/register')
    .post(userController.addUser)
router
    .route('/login')
    .post(userController.login)
router
    .route('/update/:rollNo')
    .patch(userController.updateUser)
router
    .route('/delete')
    .delete(userController.remove)
router
    .route('/profile/:rollNo')
    .get(userController.profile)

module.exports = router;