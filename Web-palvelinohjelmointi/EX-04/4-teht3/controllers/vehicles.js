const Vehicle = require('../models/Vehicle')

const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({})
  res.status(200).json({ success: true, data: vehicles })
}

const createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body)
    res.status(201).send({ success: true, data: vehicle })
  } catch (error) {
    res.status(400).send({ success: false, data: error })
  }
}

const getSingleVehicle = async (req, res) => {
  const { id } = req.params
  try {
    const vehicle = await Vehicle.findById(id)
    if (!vehicle) {
      return res
      //eslint-disable-next-line
      .status(404).json({ success: false, msg: `No vehicle found with id ${id}` })
    }
    return res.status(200).json({ success: true, data: vehicle })
  } catch (error) {
    console.log(error)
  }
}

const updateVehicle = (req, res) => {
  res.status(501).json({ success: true, msg: 'not implemented' })
  // const { id } = req.params
  // const { type, make, model } = req.body
  
  // const vehicle = vehicles.find((vehicle) => vehicle.id === Number(id))
  
  // if (!vehicle) {
  //   return res
  //     .status(404)
  //     .json({ success: false, msg: `No vehicle found with id ${id}` })
  // }
  // const newVehicles = vehicles.map((vehicle) => {
  //   if (vehicle.id === Number(id)) {
  //     vehicle.type = type
  //     vehicle.make = make
  //     vehicle.model = model
  //   }
  //   return vehicle
  // })
  // res.status(200).json({ success: true, data: newVehicles })
}
  
const deleteVehicle = (req, res) => {
  res.status(501).json({ success: true, msg: 'not implemented' })
  // const { id } = req.params
  // const vehicle = vehicles.find((vehicle) => vehicle.id === Number(id))
  // if (!vehicle) {
  //   return res
  //     .status(404)
  //     .json({ success: false, msg: `No vehicle found with id ${id}` })
  // }
  // const newVehicles = vehicles.filter(
  //   (vehicle) => vehicle.id !== Number(req.params.id)
  // )
  // vehicles = [...newVehicles]
  // return res.status(200).json({ success: true, data: newVehicles })
}

module.exports = {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle
}
