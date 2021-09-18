const userRoutes = require('../routes/index');

module.exports = function (app, passport) {

    //user
    app.use('/user',userRoutes);
}