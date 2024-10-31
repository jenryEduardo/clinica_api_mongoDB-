const {ObjectId}=require('mongodb')
const {connectionDB}=require('../config/db.js')

async function agregarInventario(data) {
      try {
        const db=await connectionDB()
        const result=db.collection('inventory').insertOne(data)
        return result
      } catch (error) {
        console.log("error al conectar la bd")
      }
}


async function encontrarProducto() {
    try {
        const db=await connectionDB()
        const result=await db.collection('inventory').find({}).toArray()
        console.log(result)
        return result
    } catch (error) {
        console.log("no se pudo conectar a la coleccion")
    }
}


async function actualizarProducto(id,data) {
    try {
      const db=await connectionDB()
      const update=db.collection('inventory').updateOne({_id:new ObjectId(id)},{$set:data})
      return update
    } catch (error) {
      console.log("no se pudo conectar a la bd ",error);
    }
}

async function deleteProductos(id) {
 try {
  const db=await connectionDB()
  const result=db.collection('inventory').deleteOne({_id:new ObjectId(id)})
  return result
 } catch (error) {
  throw error
 }
}

module.exports={  
    agregarInventario,
    encontrarProducto,
    actualizarProducto,
    deleteProductos
}