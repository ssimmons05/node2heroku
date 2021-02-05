require('dotenv').config()
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send(process.env.PORT)
})

// this is how you access values from your .env file
const key = process.env.KEY

// get the default port for our Heroku dyno
const port = process.env.PORT

// create a web server
app.listen(port, function () {
    console.log(`listening on ${port}`)
})