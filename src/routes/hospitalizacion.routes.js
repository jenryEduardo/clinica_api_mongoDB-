const express = require('express')
const routes = express.Router()
const hostControllers = require('../controllers/hospitalizacionControllers.js')
const {getToken} = require('../middleware/token.js')
routes.post('/add-host',getToken,hostControllers.addHospitalitation)
routes.get('/view-hosts',hostControllers.viewHost)
routes.get('/view-host/:nombrePaciente',getToken,hostControllers.viewHostByName)
routes.put('/edit-host/:nombrePaciente',getToken,hostControllers.editHostByName)
routes.delete('/delete-host/nombrePaciente',getToken,hostControllers.deleteById)

module.exports = routes