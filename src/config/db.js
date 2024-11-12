const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;

let db; 

async function connectionDB() {
    try {
            const client = new MongoClient(uri);
        await client.connect();
        db = client.db('clinica');
        console.log('Conectado a la base de datos');
        return db; 
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        throw err;
    }
}


module.exports = {
    connectionDB,
};
