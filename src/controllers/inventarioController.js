const {agregarInventario,encontrarProducto, actualizarProducto, deleteProductos,addPresentacion, modificarCantidadPresentacion} =require('../models/inventario.js')
const { connectionDB } = require('../config/db.js');
const { ObjectId } = require('mongodb');
async function addInventory(req,res) {
   try {
    const nombre=req.body
    if(!nombre){
      console.log("por favor ingrese valores validos en los campos");
      return 0
  }
    await agregarInventario(nombre)
    res.status(201).json({exitoso:"nuevo producto agregado al inventario"})
   } catch (error) {
        console.log(error)
   }
}

async function addPresentations(req,res) {
try {
  const {nombre} = req.params
  const data = req.body
  const db = await connectionDB()
  if(!data || !nombre){
      console.log("por favor ingrese valores validos en los campos");
      return 0
  }
 const add = await db.collection('inventory').findOneAndUpdate(
      {nombre : nombre},
      {$push:{presentacion : data}}
  )
  res.status(201).json({ok:add})
} catch (error) {
  console.log(error);
  
}
}
async function getProduct(req, res) {
  try {
    const { nombreFormula } = req.params;
    const db = await connectionDB();
    
    const result = await db.collection('inventory').findOne({ nombre: nombreFormula });
    
    if (result) {
      res.status(200).json( result.presentacion );
    } else {
      res.status(404).json({ error: "No se encontró el medicamento" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
}


async function actualizar(req,res) {
  try {
    const {id}=req.params
    const datosactualizados=req.body
    if(!id || !datosactualizados){
      console.log("no se pueden mandar datos nulos o vacios");
      return
    }
    await actualizarProducto(id,datosactualizados)
    res.status(201).json({succesfull:"producto actualizado correctamente"})
  } catch (error) {
   console.log(error)
  }
}

async function nameProduct(req,res) {
  try {
    const db = await connectionDB();
    const result = await db.collection('inventory').find().toArray()
    if(!result){
      console.log("no existe registros");
    }
    res.status(201).json(result)
  } catch (error) {
    console.log("error");
  }
}




async function deleteProduct(req,res) {
try {
  console.log(req.params);
  const {name}=req.params
 await deleteProductos(name)
  res.status(201).json({succesfull:"producto eliminado con exito"})
} catch (error) {
  console.log(error);
}
}


async function updatequantityMedicament(req,res) {
 try {
  const datos=req.body
  await modificarCantidadPresentacion(datos)
  res.status(201).json({succesfull:"datos actualizados"})
 } catch (error) {
  console.log(error);
 }
}

module.exports={
    addInventory,
    getProduct,
    actualizar,
     deleteProduct,
    updatequantityMedicament,
    addPresentations,
    nameProduct
}
 
