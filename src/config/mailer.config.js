//the lib we're using to send emails 
const nodemailer = require('nodemailer')
//the lib we are using to read 
//the environment variables from the .env file
require('dotenv').config()

//I'm using a gmail address to send the emails,
//refer to nodemailer documentation for further configurations 
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
})

module.exports = {
  transport
}
