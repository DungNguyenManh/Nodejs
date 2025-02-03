const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views')) // Nơi lưu trữ template engine
    app.set('view engine', 'ejs') // Sử dụng template engine là ejs
    app.use(express.static(path.join('./src', 'public'))) // Sử dụng static file
}

module.exports = configViewEngine