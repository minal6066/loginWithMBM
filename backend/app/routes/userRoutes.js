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
    .route('/update')
    .patch(userController.isAuth, userController.updateUser)
router
    .route('/delete')
    .delete(userController.isAuth, userController.remove)
router
    .route('/profile')
    .get(userController.isAuth, userController.profile)

module.exports = router;