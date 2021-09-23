const userRoutes = require('../routes/userRoutes');

module.exports = function (app, passport) {

    //user
    app.use('/user',userRoutes);
}