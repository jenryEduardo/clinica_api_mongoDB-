const { json } = require('express')
const {agregarConsulta,editarConsultaPorId,eliminarPorId,verConsulta,verConsultaPorId} = require('../models/consulta.js')
const { get } = require('../routes/inventory.routes')


async function addConsult(req,res) {
    try {
    const data = req.body
    await agregarConsulta(data)
    res.status(201).json({succesfull:"consulta creada"})
    } catch (error) {
        throw error
    }
}


async function updateConsult(req,res) {
   try {
    const {id} = req.params
    const data = req.body
    await editarConsultaPorId(id,data)
    res.status(201).json({succesfull:"actualizacion exitosa"})
   } catch (error) {
    throw error
   }
}

async function deleteConsultById(req,res) {
try {
    const {id} = req.params
    await eliminarPorId(id)
    res.status(201).json({succesfull:"consulta eliminada con exito"})
} catch (error) {
    throw error
}
}

async function getConsult(req,res) {
    try {
        await verConsulta()
        res.status(201).json({ok:"solicitud realizado con exito"})
    } catch (error) {
        throw error
    }
}

async function getConsultByName(req,res) {
    try {
        const {nombre} = req.params
        await verConsultaPorId(nombre)
        res.status(201).json({ok:"consulta encontrada"})
    } catch (error) {
        throw error
    }
}



module.exports = {
    addConsult,
    updateConsult,
    deleteConsultById,
    getConsult,
    getConsultByName
}