const express = require('express')

//initializes our express app
const app = express()

//initializes our http routes
const routes = express.Router()

//tell our app to use this routes
app.use(routes)

//our testing route
routes.get('/', (req, res) => {
    res.send('hello world')	
})

//exposes our app to port 5000 on localhost
app.listen(5000, () => console.log('server running on port 5000'))

