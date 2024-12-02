  const {agregarInventario,encontrarProducto, actualizarProducto, deleteProductos,addPresentacion, modificarCantidadPresentacion} =require('../models/inventario.js')
  const { connectionDB } = require('../config/db.js');
  const { ObjectId } = require('mongodb');
  const { v4: uuidv4 } = require('uuid'); // Asegúrate de instalar esta biblioteca con `npm install uuid`
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



  async function addPresentations(req, res) {
    try {
      const { nombre } = req.params;
      const data = req.body;
  
      const db = await connectionDB();
      if (!data || !nombre) {
        console.log("Por favor ingrese valores válidos en los campos");
        return res.status(400).json({ error: "Datos inválidos" });
      }
  
      // Generar un ID único para la nueva presentación
      const newPresentation = {
        ...data,
        id: uuidv4(), // Agregar el ID único generado
      };
  
      // Actualizar la colección con la nueva presentación
      const add = await db.collection('inventory').findOneAndUpdate(
        { nombre: nombre },
        { $push: { presentacion: newPresentation } },
        { returnDocument: 'after' } // Devuelve el documento actualizado
      );
  
      res.status(201).json({ presentacion: newPresentation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error del servidor" });
    }
  }
  
  async function getProduct(req, res) {
    try {
      // const { nombreFormula } = req.params;
      const db = await connectionDB();
      
      const result = await db.collection('inventory').find({},{projection: { nombre: 1 }}).toArray();
      
      if (result) {
        res.status(200).json( result );
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
      const {nombre}=req.params
      const body=req.body
      if(!nombre || !body){
        console.log("no se pueden mandar datos nulos o vacios");
        return
      }
      await modificarCantidadPresentacion(nombre,body)
      res.status(201).json({succesfull:"producto actualizado correctamente"})
    } catch (error) {
    console.log(error)
    }
  }

  async function nameProduct(req,res) {
    try {
      const db = await connectionDB();
      const result = await db.collection('inventory').find({},{ projection: { presentacion: 1 } }).toArray()

      if(!result){
        console.log("no existe registros");
      }
      const presentaciones = result.flatMap(item => item.presentacion);

      res.status(201).json(presentaciones)
    } catch (error) {
      console.log("error: ",error);
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

  async function eliminarPresentacion(req,res) {
    const {nombre} = req.params
      const {id} = req.params
    try {
      const db = await connectionDB()
      const result = await db.collection('inventory').updateOne(
        {nombre:nombre},
        {$pull:{presentacion:{id:id}}})

          if(result.modifiedCount>0){
              res.status(201).json(result)
          }else{
            res.status(404).json({error:"no se encontro la presentacion"})
          }
    } catch (error) {
      console.log(error);
    }
  }


  async function updatequantityMedicament(req,res) {
  try {
    const {precio}=req.body
    const {nombre,gramaje} = req.params
    await modificarCantidadPresentacion(nombre,gramaje,precio)
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
      nameProduct,
      eliminarPresentacion
  }
  
