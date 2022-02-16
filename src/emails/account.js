const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rtechnoo7@gmail.com',
        sunject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know what you think of this app.`

    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rtechnoo7@gmail.com',
        subject: 'Goodbye, We you had a great time with us!',
        text: `We wish you well, ${name}. Let us know what makes you leave us.`
    })
}

module.exports = {
    sendWelcomeEmail
}