module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/jobs', require('./job.routes'))
}