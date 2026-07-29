//The Brains
const userService=require('../services/userService');

// Handler for GET /users
const getAllUsers=async(req,res)=>{
    const users=userService.fetchAllUsers();
    res.status(200).json(users);
}

// Handler for POST /users
const createUser=(req,res)=>{
    const newUserData=req.body;//incoming data parsed by express.json() middleware

    if(!newUserData.name){
        return res.status(400).json({error:"Name field is absolutely required"});
    }

    const createdUser=userService.addNewUser(newUserData);
    res.status(201).json(createdUser);
};

module.exports={getAllUsers,createUser};