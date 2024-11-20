const { ObjectId } = require('mongodb')
const {connectionDB} = require('../config/db.js')


async function agregarConsulta(data) {
  
    try {
        const db = await connectionDB()
        const result =await db.collection('consulta').insertOne(data)
        return result
    } catch (error) {
      console.log("error");
    }
    
}


async function editarConsultaPorId(id,data) {
 try {
    const db = await connectionDB()
    const result = await db.collection('consulta').updateOne({_id:new ObjectId(id)},{$set:data})
    return  result
 } catch (error) {
  console.log("error");
 }
}

async function verConsulta() {
    const db =await connectionDB()
    const result =await db.collection('consulta').find({}).toArray()
    console.log(result);
    
}


async function verConsultaPorId(nombre) {
   try {
    const db =await connectionDB()
    const result =await db.collection('consulta').find({nombre:nombre}).toArray()
    console.log(result);
   } catch (error) {
    console.log(error);
   }
}

async function eliminarPorId(id) {
  try {
    const db= await connectionDB()
    const borrar = await db.collection('consulta').deleteOne({_id:new ObjectId(id)})
    return borrar
  } catch (error) {
    console.log(error);
  }
    
}

module.exports = {
    agregarConsulta,
    editarConsultaPorId,
    verConsulta,
    verConsultaPorId,
    eliminarPorId
}