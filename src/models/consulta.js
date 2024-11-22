const { ObjectId } = require('mongodb')
const {connectionDB} = require('../config/db.js')


async function agregarConsulta(data) {
  
    try {
        const db = await connectionDB()
        if(!data){
            console.log("ingrese valores a los campos");
        }
        const result =await db.collection('consulta').insertOne(data)
        return result
    } catch (error) {
      console.log("error");
    }
    
}


async function editarConsultaPorId(id, data) {
  try {
    const db = await connectionDB();
    if (data._id) {
      delete data._id;
    }
    const result = await db.collection('consulta').updateOne(
      { id: id }, 
      { $set: data } 
    );

    return result;
  } catch (error) {
    throw error;
  }

}



async function verConsulta() {
try {
  const db =await connectionDB()
  const result =await db.collection('consulta').find({}).toArray()
  console.log(result);
  return result
} catch (error) {
  console.log("errpr");
  
}
    
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
    const db = await connectionDB();

    const borrar = await db.collection('consulta').deleteOne({ id: id });

    return borrar;
  } catch (error) {
    console.error("Error al eliminar la consulta:", error);
    throw error; 
  }
}


module.exports = {
    agregarConsulta,
    editarConsultaPorId,
    verConsulta,
    verConsultaPorId,
    eliminarPorId
}