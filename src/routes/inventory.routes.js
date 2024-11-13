const express = require('express');
const inventoryController = require('../controllers/inventarioController');
const router = express.Router();

router.post('/add-inventory', inventoryController.addInventory);
router.get('/view', inventoryController.getProduct);
router.put('/actualizar/:id', inventoryController.actualizar);
router.post('/add-presentacion', inventoryController.agregarPresentacion);
router.delete('/eliminar/:id',inventoryController.deleteProduct)

//updatequantityMedicament
module.exports = router;

