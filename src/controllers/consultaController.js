const { json } = require('express')
const {agregarConsulta,editarConsultaPorId,eliminarPorId,verConsulta,verConsultaPorId} = require('../models/consulta.js')
const { get } = require('../routes/inventory.routes')


async function addConsult(req,res) {
    try {
    const data = req.body
    if(!data){
      console.log("ingrese todos los campos");
    }else{
      await agregarConsulta(data)
      res.status(201).json({succesfull:"consulta creada"})
    }
    } catch (error) {
        throw error
    }
}


async function updateConsult(req, res) {
    try {
      const { id } = req.params; 
      const data = req.body;
      const resultado = await editarConsultaPorId(id, data);
      if (resultado.modifiedCount > 0) {
        res.status(200).json({ success: true, message: "Consulta actualizada con éxito" });
      } else {
        res.status(404).json({ success: false, message: "Consulta no encontrada" });
      }
    } catch (error) {
      console.error("Error actualizando la consulta:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
  

async function deleteConsultById(req, res) {
    try {
      const { id } = req.params;
  
      await eliminarPorId(id);
  
      return res.status(200).json({ success: "Consulta eliminada con éxito." });
    } catch (error) {
      console.error("Error al eliminar la consulta:", error);
  
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  }
  
  

async function getConsult(req,res) {  
    try {
       const result = await verConsulta()
        res.status(201).json(result)
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