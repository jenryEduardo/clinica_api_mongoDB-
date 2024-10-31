const express=require('express')
const app=express()

require('dotenv').config();

const userRoutes=require('./src/routes/user.routes.js')
const inventoryRoutes=require('./src/routes/inventory.routes.js')
const camillaRoutes=require('./src/routes/camilla.routes.js')
app.use(express.json());


app.use('/user',userRoutes)
app.use('/inventory',inventoryRoutes)
app.use('/camilla',camillaRoutes)

const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`api listening in port ${port}`);
})