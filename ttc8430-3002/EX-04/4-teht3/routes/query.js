const express = require('express')
const router = express.Router()

const {
  query,
} = require('../controllers/query')

router.get('/', query)

module.exports = router
