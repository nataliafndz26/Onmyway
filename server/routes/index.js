module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
}