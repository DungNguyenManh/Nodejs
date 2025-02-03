const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT // port
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views')) // Nơi lưu trữ template engine
app.set('view engine', 'ejs') // Sử dụng template engine là ejs

app.use(express.static(path.join(__dirname, 'public'))) // Sử dụng static file

// Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check ABC!')
})

app.get('/hoidanit', (req, res) => {
    //res.send('Hello World!')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})