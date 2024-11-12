const express=require('express')
const router=express.Router()

const userController=require('../controllers/user.js')

router.post('/add-user',userController.addUser)
router.get('/users',userController.getUser)

module.exports=router;