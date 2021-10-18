const userRoutes = require('../routes/userRoutes');
const oauthRoutes = require('../routes/oauthRoutes');

module.exports = function (app, passport) {

    //user
    app.use('/user',userRoutes);
    app.use('/signin', oauthRoutes)
}