var data = require('../models/data')
var methods = {}

methods.getData = function(req, res, next) {
    // console.log('Test');
    data.getData((data) => {
        res.send(data)
    })
}

methods.getTimeline = function(req, res, next) {
    // console.log('Test');
    data.getTimeline((data) => {
        res.send(data)
    })
}

module.exports = methods