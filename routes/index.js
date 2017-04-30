'use strict';
const router = require('express').Router()
const dataController = require('../controllers/dataController')

router.get('/api/getData', dataController.getData)
router.get('/api/getTimeline', dataController.getTimeline)

module.exports = router