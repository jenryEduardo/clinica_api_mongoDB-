const {connectionDB} = require('../config/db')


async function agregarAHospitalizacion(data) {
    try {
        const db = await connectionDB()
        const result = await db.collection('hospitalizacion').insertOne(data)
        return result
    } catch (error) {
      console.log("error");
    }
}


async function editarHospitalizacionPorNombre(nombrePaciente,data) {
    try {
       const db = await connectionDB()
       const result = await db.collection('hospitalizacion').updateOne({nombrePaciente:nombrePaciente},{$set:data})
       return  result
    } catch (error) {
      console.log("error");
    }
   }
   
   async function verHospitalizaciones() {
       const db =await connectionDB()
       const result =await db.collection('hospitalizacion').find({}).toArray()
       console.log(result);
       
   }
   
   
   async function verHospitalizacionPorNombrePaciente(nombrePaciente) {
      try {
       const db =await connectionDB()
       const result =await db.collection('hospitalizacion').find({nombrePaciente:nombrePaciente}).toArray()
       console.log(result);
      } catch (error) {
       console.log(error);
      }
   }
   
   async function eliminarPorId(id) {
     try {
       const db= await connectionDB()
       const borrar = await db.collection('hospitalizacion').deleteOne({_id:new ObjectId(id)})
       return borrar
     } catch (error) {
       console.log(error);
     }
       
   }


module.exports ={
    agregarAHospitalizacion,
    editarHospitalizacionPorNombre,
    eliminarPorId,
    verHospitalizacionPorNombrePaciente,
    verHospitalizaciones
}