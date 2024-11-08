const express=require('express')
const app=express()
const cors = require('cors')

require('dotenv').config();

const inventoryRoutes=require('./src/routes/inventory.routes.js')
const consultaRoutes = require('./src/routes/consulta.routes.js')
const hostRoutes = require('./src/routes/hospitalizacion.routes.js')
app.use(express.json());

app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200/', // Reemplaza con el dominio de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    credentials: true // Permitir envío de cookies
  }));

app.use('/inventory',inventoryRoutes)
app.use('/consults',consultaRoutes)
app.use('/hospitalizacion',hostRoutes)


const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`api listening in port ${port}`);
})