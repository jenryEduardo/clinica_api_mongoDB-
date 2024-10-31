
const express=require('express')

const router=express.Router()

const camillacontrollers=require('../controllers/camillacontroller.js')


router.post('/add',camillacontrollers.addCamilla)
router.get('/view',camillacontrollers.getCamilla)

module.exports=router
