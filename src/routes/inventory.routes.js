const express = require('express');
const inventoryController = require('../controllers/inventarioController');
const router = express.Router();
const {getToken} = require('../middleware/token.js')
router.post('/add-inventory',getToken, inventoryController.addInventory);
router.get('/view',getToken, inventoryController.getProduct);
router.put('/actualizar/:nombre', inventoryController.actualizar);
router.delete('/eliminar/:id',getToken,inventoryController.deleteProduct)
router.put('/add/:nombre',getToken,inventoryController.addPresentations)
router.get('/view-all',getToken,inventoryController.nameProduct)
router.put('/update/:nombre/:gramaje',getToken,inventoryController.updatequantityMedicament)
router.delete('/delete/:nombre/:id',getToken,inventoryController.eliminarPresentacion)
//updatequantityMedicament
module.exports = router;

