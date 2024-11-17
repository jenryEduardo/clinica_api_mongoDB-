const express=require('express')
const router=express.Router()
const {getToken} = require('../middleware/token.js')
const userController=require('../controllers/user.js')

router.post('/add-user',getToken,userController.addUser)
router.get('/users',getToken,userController.getUser)
router.put('/edit-user/:id',getToken,userController.edit)
module.exports=router;