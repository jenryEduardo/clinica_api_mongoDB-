
const { createUser, obtenerUser, editUser } = require('../models/User.js');

async function addUser(req, res) {
    try {
        const user = req.body;
        await createUser(user);
        res.status(201).json({ message: 'Usuario agregado correctamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al agregar el usuario' });
        console.error(err);
    }
}

async function getUser() {
    try{
        await obtenerUser()
    }catch(err){
        console.log("no se puede obtener los usuarios");
        
    }
}

async function edit(req,res) {
    try {
        const { id } = req.params
        const data = req.body
        await editUser(id,data)
        res.status(201).json({ok:"Datos actualizados"})
    } catch (error) {
        throw error
    }
}

module.exports = {
    addUser,
    getUser,
    edit
};

