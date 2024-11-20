
const { ObjectId } = require('mongodb');
const { connectionDB } = require('../config/db.js');

async function createUser(user) {
    try {
        const db = await connectionDB();
        const result = await db.collection('users').insertOne(user); 
        return result;
    } catch (error) {
        console.error('Error al crear el usuario:', error.message);
        console.log("error");
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


async function editUser(id,dataUser) {
  try {
    const db = await connectionDB()
    const result = await db.collection('users').updateOne({_id:new ObjectId(id)},{$set:dataUser})
    return result
  } catch (error) {
      console.log(error);
      
  }
}


module.exports = {
    createUser,
    obtenerUser,
    editUser
};

