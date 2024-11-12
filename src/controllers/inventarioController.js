async function getProduct(req, res) {
  try {
    const productos = await encontrarProducto();  // Recupera los productos
    if (productos.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron productos" });  // En caso de que no haya productos
    }
    return res.status(200).json(productos);  // Devuelve los productos encontrados
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al obtener productos" });  // Respuesta en caso de error
  }
}
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
  const id=req.params
 await deleteProductos(id)
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
