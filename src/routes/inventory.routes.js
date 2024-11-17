const express = require('express');
const inventoryController = require('../controllers/inventarioController');
const router = express.Router();
const {getToken} = require('../middleware/token.js')
router.post('/add-inventory',getToken, inventoryController.addInventory);
router.get('/view',getToken, inventoryController.getProduct);
router.put('/actualizar/:id',getToken, inventoryController.actualizar);
router.delete('/eliminar/:id',getToken,inventoryController.deleteProduct)
router.put('/add/:id',getToken,inventoryController.addPresentations)
//updatequantityMedicament
module.exports = router;

