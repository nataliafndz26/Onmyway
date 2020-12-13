const express = require('express')
const router = express.Router()

const transporter = require('../configs/nodemailer.config')

router.post('/sendEmail', (req, res) => {

    const { hostEmail, hostName, userEmail, userName, subject, message } = req.body

    transporter
        .sendMail({
            from: `'${userName}' <${userEmail}>`,
            to: `'${hostName}' <${hostEmail}>`,
            subject: subject,
            text: message,
            html: `<p>${message}</p>`
        })
        .then(info => res.json(info))
        .catch(err => res.status(500).json(err))
})

module.exports = router