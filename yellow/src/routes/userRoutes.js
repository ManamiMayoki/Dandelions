//The Traffic Map

const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

// Map the HTTP methods and paths directly to Controller actions
router.get('/',userController.getAllUsers);
router.post('/',userController.createUser);

module.exports=router;