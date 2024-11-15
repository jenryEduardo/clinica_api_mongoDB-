const { ObjectId } = require('mongodb');
const { connectionDB } = require('../config/db.js');

// Función para agregar un nuevo producto
async function agregarInventario(data) {
    try {
        const db = await connectionDB();
        
        // Verificar que 'data.presentacion' sea un array vacío
        if (!data.presentacion || !Array.isArray(data.presentacion)) {
            data.presentacion = []; // Si no hay presentaciones, inicializamos el array vacío
        }
        
        // Insertar el medicamento con el array vacío de presentaciones
        const result = await db.collection('inventory').insertOne(data);
        return result;
    } catch (error) {
        console.log("Error al agregar inventario", error);
    }
}


// Función para obtener todos los productos
async function encontrarProducto() {
    try {
        const db = await connectionDB();
        const result = await db.collection('inventory').find({}).toArray();
        console.log(result);
        return result;
    } catch (error) {
        console.log("No se pudo conectar a la colección", error);
    }
}

// Función para actualizar un producto
async function actualizarProducto(id, data) {
    try {
        const db = await connectionDB();
        const update = await db.collection('inventory').updateOne({ _id: new ObjectId(id) }, { $set: data });
        return update;
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error);
    }
}

// Función para modificar la cantidad de presentación de un producto
async function modificarCantidadPresentacion(datos) {
    try {
        const db = await connectionDB();
        const result = await db.collection('inventory').updateOne(
            { nombre: datos.nombre },
            { $set: { 'presentacion.$[element].cantidad': datos.cantidad } },
            {
                arrayFilters: [{ 'element.gramaje': datos.gramaje, 'element.patente': datos.patente }]
            }
        );
        console.log("Datos actualizados: ", result);
    } catch (error) {
        throw error;
    }
}

async function deleteProductos(name){
	
	try{
		const db = await connectionDB();
		const result =  await db.collection('inventory').deleteOne(
			{nombre:name}
		)
    if(result){
      console.log("datos eliminados")
    }
	
	}catch(err){
		throw error;
	}
}


module.exports = {
    agregarInventario,
    encontrarProducto,
    actualizarProducto,
    deleteProductos,
    modificarCantidadPresentacion
};

