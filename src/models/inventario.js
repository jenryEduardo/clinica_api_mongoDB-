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


async function addPresentation(datos) {
  try {
    const db=await connectionDB()
    const result =await db.collection('inventory').updateOne(
      {nombre:datos.nombre},
      {$push:{presentacion:datos.presentacion}} 
    )
    console.log(result);
    
  } catch (error) {
    console.log("error", error);
    
  }
}


async function modificarCantidadPresentacion(datos) {
  try {
    const db= await connectionDB()
    const result = await db.collection('inventory').updateOne(
      {nombre:datos.nombre},
      {$set:{'presentacion.$[element].cantidad':datos.cantidad}},
      // ojala pudiera cambiar todos mis recuerdos asi de facil y olvidarla unu
      //psdt el metodo element se utliza para actualizar elementos de un array 
      //en el documento y se actuliza si comple con cierto requisito que se establecen en arrayFilters
      {arrayFilters:[{'element.gramaje':datos.gramaje, 'element.patente':datos.patente}]}
    )

    console.log("datos actualizados "+result);
  } catch (error) {
    throw error
  }
}

module.exports={  
    agregarInventario,
    encontrarProducto,
    actualizarProducto,
    deleteProductos,
    addPresentation,
    modificarCantidadPresentacion
}