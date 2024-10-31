const { connectionDB } = require('../config/db.js');

async function createUser(user) {
    try {
        const db = await connectionDB();
        const result = await db.collection('users').insertOne(user); 
        return result;
    } catch (error) {
        console.error('Error al crear el usuario:', error.message);
        throw error;
    }
}

async function obtenerUser() {
  try{
    const db=await connectionDB();
    const result=await db.collection('users').findOne()
    return result
  }catch(err){
       console.log("error");
  }
}


module.exports = {
    createUser,
    obtenerUser
};
