const {agregarInventario,encontrarProducto, actualizarProducto, deleteProductos, addPresentation, modificarCantidadPresentacion} =require('../models/inventario.js')

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
    const medicamentos = await encontrarProducto()
    res.status(201).json(medicamentos)
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


async function agregarPresentacion(req,res) {
   const datos=req.body
    try {   
      await addPresentation(datos)
      res.status(201).json({succesfull:"presentacion agregada exitosamente"})
    } catch (error) {
      throw error
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
    throw error
 }
}

module.exports={
    addInventory,
    getProduct,
    actualizar,
     deleteProduct,
    agregarPresentacion,
    updatequantityMedicament
}
 
