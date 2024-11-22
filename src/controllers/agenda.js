const { trusted } = require('mongoose');
const { connectionDB } = require('../config/db.js');


async function addCalendary(req,res) {
try {
    const data = req.body
    if(!data){
        console.log("ingrese valores validos por favor");
    }
    const db = await connectionDB()
    await db.collection('calendario').insertOne(data)
    res.status(201).json({ok:"datos agredados"})
} catch (error) {
    console.log(error);
}
}

async function getCalendario(req,res) {
    try {
        const db = await connectionDB()
        const datos = await db.collection('calendario').find().toArray()
        res.status(201).json(datos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addCalendary,
    getCalendario
}