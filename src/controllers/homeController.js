const getHomepage = (req, res) => {
    res.send('Hello World!')
}

const getABC = (req, res) => {
    res.send('Check ABC!')
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getHoidanit
}