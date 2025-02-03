require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')

const app = express() // app express
const port = process.env.PORT // port
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// Khai báo route


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})