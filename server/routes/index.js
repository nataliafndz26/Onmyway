module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/jobs', require('./job.routes'))
    app.use('/api/users', require('./user.routes'))
    app.use('/api/preferences', require('./preference.routes'))
    app.use('/api/files', require('./files.routes'))
    app.use('/api/mail', require('./nodemailer.routes'))
    app.use('/api/comments', require ('./comments.routes'))
}