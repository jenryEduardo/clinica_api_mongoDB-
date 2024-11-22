const jwt = require('jsonwebtoken');
require('dotenv').config()

const secret = process.env.SECRET_KEY

function getToken(req,res,next){
    const auth = req.headers['authorization']
        if(!auth){
            res.status(401).json({message:"token requerido"})
        }
        const token = auth.split(" ")[1]
        try {
            const decode = jwt.verify(token,secret)

            req.user = decode

            next()
        } catch (error) {
            return res.status(403).json({ message: 'Token inválido o ha expirado' });
        }
}

module.exports = {getToken};