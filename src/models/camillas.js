
const {connectionDB}= require('../config/db')


async function agregarCamilla(camilla) {
      try {
        const db=await connectionDB()
        const result=await db.collection('camilla').insertOne(camilla)
        return result
      } catch (error) {
        console.log("error al conectar a la   bd")
      }
}


async function obtenerCamilla() {
    const db=await connectionDB()
    const data=await db.collection('camilla').find({}).toArray()
    console.log(data)
    return data
}




module.exports={
    agregarCamilla,
    obtenerCamilla
}