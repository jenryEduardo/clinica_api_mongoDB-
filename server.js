const express=require('express')
const app=express()

require('dotenv').config();

const inventoryRoutes=require('./src/routes/inventory.routes.js')
app.use(express.json());


//PROFE LA VERDAD SOLO DEJE UNA COLECCION QUE ES INVENTARIO YA QUE LO DEMAS VI MEJOR EN POSTGRESQL YA QUE NINGUN DATO CAMBIA
//MIENTRAS QUE EN INVENTARIO SI

app.use('/inventory',inventoryRoutes)

const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`api listening in port ${port}`);
})