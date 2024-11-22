const {agregarAHospitalizacion,editarHospitalizacionPorNombre
    ,eliminarPorId,verHospitalizacionPorNombrePaciente,verHospitalizaciones
} = require('../models/hospitalizacion.js')

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
        await verHospitalizacionPorNombrePaciente(nombrePaciente)
        res.status(201).json({ok:"solicitud realizada con exito"})
    } catch (error) {
        throw error
    }
}

async function viewHost() {
    try {
        await verHospitalizaciones()
        res.status(201).json({ok:"solicitud con exito"})
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