const express = require('express')
const routes = express.Router()
const consultaRutas = require('../controllers/consultaController.js')
const {getToken} = require('../middleware/token.js')

routes.post('/add-consult',consultaRutas.addConsult)
routes.put('/edit-consult/:id',consultaRutas.updateConsult)
routes.get('/view-consults',consultaRutas.getConsult)
routes.get('/view-consult/:nombre',getToken,consultaRutas.getConsultByName)
routes.delete('/delete-consult/:id',consultaRutas.deleteConsultById)


module.exports = routes