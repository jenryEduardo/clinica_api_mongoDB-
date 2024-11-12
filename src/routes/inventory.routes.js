
const express=require('express')
const inventoryController=require('../controllers/inventarioController.js')
const router=express.Router()

router.post('/add-inventory',inventoryController.addInventory)
router.get('/view',inventoryController.getProduct)
router.put('/actualizar/:id',inventoryController.actualizar)
router.delete('/eliminar/:nombre',inventoryController.deleteProduct)
router.post('/add-presentacion',inventoryController.agregarPresentacion)
router.post('/update-cant',inventoryController.updatequantityMedicament)
module.exports=router