const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(require('body-parser').urlencoded({
    extended: false
}));

app.use('/', require('./routes'))

app.listen(3000)