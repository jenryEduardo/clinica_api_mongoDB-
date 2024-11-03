const express=require('express')
const app=express()

require('dotenv').config();

const inventoryRoutes=require('./src/routes/inventory.routes.js')
const consultaRoutes = require('./src/routes/consulta.routes.js')
const hostRoutes = require('./src/routes/hospitalizacion.routes.js')
app.use(express.json());


app.use('/inventory',inventoryRoutes)
app.use('/consults',consultaRoutes)
app.use('/hospitalizacion',hostRoutes)


const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`api listening in port ${port}`);
})