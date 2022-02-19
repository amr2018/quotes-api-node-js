// import modules
const express = require('express')
const router = express.Router()
const {getQuotesFromFile, getQuotesTypes} = require('../controls/user')

router.get('/quotes', getQuotesFromFile).get('/quotes/:type', getQuotesTypes)

module.exports = router