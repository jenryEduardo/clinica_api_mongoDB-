const { ObjectId } = require('mongodb');
const { connectionDB } = require('../config/db.js');

// Función para agregar un nuevo producto
async function agregarInventario(data) {

        data.presentacion=[]

    try {
        console.log(data); 
        const db = await connectionDB();
        const result = await db.collection('inventory').insertOne(data);
        return result;
    } catch (error) {
        console.log("Error al agregar inventario", error);
    }
}


async function addPresentacion(id,data) {
    try {
        const db = await connectionDB()
        await db.collection('inventory').findOneAndUpdate(
            {_id:new ObjectId(id)},
            {$push:{presentacion : data}}
        )
        console.log(data);
    } catch (error) {
            console.log(error);
            
    }
}


// Función para obtener todos los productos
async function encontrarProducto(nombreFormula) {
    try {
        const db = await connectionDB();
        const result = await db.collection('inventory').find({nombre:nombreFormula}).toArray();
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
async function modificarCantidadPresentacion(nombre,datos) {

    console.log(nombre,datos.gramaje);

    try {
        const db = await connectionDB();

        const result = await db.collection('inventory').updateOne(
            { nombre:nombre},
            { $set: { 
                'presentacion.$[element].precio': datos.precio
            } },
            {
                arrayFilters: [{ 'element.gramaje': datos.gramaje }]
            }
        );
        console.log("Datos actualizados: ", result);
    } catch (error) {
        console.log("error");
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
		console.log("error");
	}
}


module.exports = {
    agregarInventario,
    encontrarProducto,
    actualizarProducto,
    deleteProductos,
    modificarCantidadPresentacion,
    addPresentacion
};

