const {agregarInventario,encontrarProducto, actualizarProducto, deleteProductos} =require('../models/inventario.js')

async function addInventory(req,res) {
   try {
    const inventario=req.body
    await agregarInventario(inventario)
    res.status(201).json({exitoso:"nuevo producto agregado al inventario"})
   } catch (error) {
        console.log(error)
   }
}

async function getProduct(req,res) {
  try {
    await encontrarProducto()
    res.status(201).json({exitoso:"productos encontrado"})
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
    throw error
  }
}


async function deleteProduct(req,res) {
try {
  console.log(req.params);
  const id=req.params
 await deleteProductos(id)
  res.status(201).json({succesfull:"producto eliminado con exito"})
} catch (error) {
  console.log(error);
}
}

module.exports={
    addInventory,
    getProduct,
    actualizar,
    deleteProduct
}