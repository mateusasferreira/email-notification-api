const express = require('express')
//we import our configured transport object
const {transport} = require('./config/mailer.config')
//this will set cors policy
const cors = require('cors')
require('dotenv').config()

const app = express()

const routes = express.Router()

const corsOptions = {
    origin: process.env.CLIENT_ORIGIN
}

app.use(cors(corsOptions))
//this will parse json bodies from requests
app.use(express.json())
app.use(routes)

//this is the default post route for users' form submit
routes.post('/mail', async (req, res) => {
  try {
    //these are attributtes inputted by the user
    const {name, email, subject, message} = req.body 

    await transport.sendMail({
      to: process.env.RECIPIENT_ADDRESS,
      subject: `[My App] ${subject}`,
      html: `
      <h1>New Message from: ${name}</h1>
      <h3>Contact email: ${email}</h3>
      <p>${message}</p>
      `
    })
    //status 200 means our request was successful
    res.status(200).json({message: "Successfully sent message"})
  } catch (e) {
    res.status(400).json(e.message)  
  }
})

app.listen(5000, () => console.log('server running on port 5000'))

