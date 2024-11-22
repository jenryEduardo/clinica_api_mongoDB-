const express = require('express')
const routes = express.Router()
const consultaRutas = require('../controllers/agenda.js')
const {getToken} = require('../middleware/token.js')


routes.post('/add',getToken,consultaRutas.addCalendary)
routes.get('/get',getToken,consultaRutas.getCalendario)
module.exports = routes