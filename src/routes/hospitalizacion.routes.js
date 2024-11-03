const express = require('express')
const routes = express.Router()
const hostControllers = require('../controllers/hospitalizacionControllers.js')

routes.post('/add-host',hostControllers.addHospitalitation)
routes.get('/view-hosts',hostControllers.viewHost)
routes.get('/view-host/:nombrePaciente',hostControllers.viewHostByName)
routes.put('/edit-host/:nombrePaciente',hostControllers.editHostByName)
routes.delete('/delete-host/nombrePaciente',hostControllers.deleteById)

module.exports = routes