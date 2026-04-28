const express = require('express')
const router = express.Router()
const login = require('../middleware/auth')

const {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicles')


router.get('/', getVehicles)
router.post('/', createVehicle)
router.get('/:id', getSingleVehicle)
router.put('/:id', updateVehicle)
router.delete('/:id', login, deleteVehicle)

module.exports = router
