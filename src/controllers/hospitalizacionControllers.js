const {agregarAHospitalizacion,editarHospitalizacionPorNombre
    ,eliminarPorId,verHospitalizacionPorNombrePaciente,verHospitalizaciones
} = require('../models/hospitalizacion.js')
const { connectionDB } = require('../config/db.js');

async function addHospitalitation(req,res) {
    try {
        const data = req.body
        await agregarAHospitalizacion(data)
        res.status(201).json({ok:"datos enviados"})
    } catch (error) {
        throw error
    }
}

async function editHostByName(req,res) {
    try {
        const {nombrePaciente} = req.params
        const data = req.body
        await editarHospitalizacionPorNombre(nombrePaciente,data)
        res.status(201).json({ok:"actualizado con exito"})
    } catch (error) {
        throw error
    }
}

async function deleteById(req,res) {
    try {
        const {id} = req.params
        await eliminarPorId(id)
        res.status(201).json({ok:"eliminado con exito"})
    } catch (error) {
        throw error
    }
}

async function viewHostByName(req,res) {
    try {
        const {nombrePaciente} = req.params
        const db =await connectionDB()
        const result =await db.collection('hospitalizacion').find({nombrePaciente:nombrePaciente}).toArray()
        res.status(201).json(result)    
    } catch (error) {
        throw error
    }
}

async function viewHost(req,res) {
    try {
        const db =await connectionDB()
        const result =await db.collection('hospitalizacion').find({}).toArray()
        res.status(201).json(result)
    } catch (error) {
        throw error
    }
}

module.exports = {
    addHospitalitation,
    editHostByName,
    deleteById,
    viewHost,
    viewHostByName
}