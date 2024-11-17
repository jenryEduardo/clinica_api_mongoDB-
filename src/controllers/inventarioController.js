const {agregarInventario,encontrarProducto, actualizarProducto, deleteProductos,addPresentacion, modificarCantidadPresentacion} =require('../models/inventario.js')

async function addInventory(req,res) {
   try {
    const nombre=req.body
    console.log(nombre);
    
    await agregarInventario(nombre)
    res.status(201).json({exitoso:"nuevo producto agregado al inventario"})
   } catch (error) {
        console.log(error)
   }
}

async function addPresentations(req,res) {
try {
  const {id} = req.params
  const data = req.body
  await addPresentacion(id,data)
  res.status(201).json({ok:"dv"})
} catch (error) {
  console.log(error);
  
}
}

async function getProduct(req,res) {
  try {
   const ok = await encontrarProducto()
    res.status(201).json({exitoso:ok})
  } catch (error) {
    console.log(error); 
  }
}

async function actualizar(req,res) {
  try {
    const {id}=req.params
    const datosactualizados=req.body
    await actualizarProducto(id,datosactualizados)
    res.status(201).json({succesfull:"producto actualizado correctamente"})
  } catch (error) {
   console.log(error)
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
    addPresentations
}
 
