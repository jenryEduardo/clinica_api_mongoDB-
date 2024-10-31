const {agregarCamilla,obtenerCamilla}=require('../models/camillas.js')


async function addCamilla(req,res) {
    try {
        const camilla=req.body
        await agregarCamilla(camilla)
        res.status(201).json({succesfull:"camilla agregada"})
    } catch (error) {
        throw error
    }

}

async function getCamilla(req,res) {
    try {
        await obtenerCamilla()
        res.status(201).json("solicitud realizada con exito")
    } catch (error) {
        console.log("error al conectarse al servidor");
        
    }
}

module.exports={
    addCamilla,
    getCamilla
}