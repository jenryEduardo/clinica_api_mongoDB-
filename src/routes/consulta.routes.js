const express = require('express')
const routes = express.Router()
const consultaRutas = require('../controllers/consultaController.js')
const {getToken} = require('../middleware/token.js')

routes.post('/add-consult',getToken,consultaRutas.addConsult)
routes.put('/edit-consult/:id',getToken,consultaRutas.updateConsult)
routes.get('/view-consults',getToken,consultaRutas.getConsult)
routes.get('/view-consult/:id',getToken,consultaRutas.getConsultByName)
routes.delete('/delete-consult/:id',getToken,consultaRutas.deleteConsultById)


module.exports = routes