//-----------------------------------Day-05-------------------------------------

// let users=[
//     {id:1, name:"Marufa",email:"marufa@gmail.com"},
//     {id:2, name:"Meng",email:"meng@gmail.com"}
// ]



// //1.Read
// const getAllUsers=(req,res)=>{
//     res.status(200).json(users);
// }

// //2.Create
// const createUser=(req,res)=>{
//     const {name,email}=req.body;

//     //validation
//     if(!name || !email){
//         return res.status(400).json({message:'Name & Email are required!'});
//     }
//     const newUser={
//         id:users.length+1,
//         name,
//         email
//     };
//     users.push(newUser);
//     res.status(201).json(newUser);
// }

// //3.Update
// const updateUser=(req,res)=>{
//     const userId=parseInt(req.params.id);
//     const {name,email}=req.body;

//     const user=users.find((u)=>u.id===userId);

//     if(!user){
//         return res.status(404).json({message:'User not found!'});
//     }
//     if (name) user.name=name;
//     if (email) user.email=email;

//     res.status(200).json(user);
// }

// //4.Delete
// const deleteUser=(req,res)=>{
//     const userId=parseInt(req.params.id);
//     const userIndex=users.findIndex((u)=>u.id===userId);

//     if(userIndex===-1){
//         return res.status(404).json({message:'User not found!'});
//     }

//     //remove
//     users.splice(userIndex,1);
//     res.status(200).json({message:'User deleted successfully!'});
// }

// module.exports={
//     getAllUsers,
//     createUser,
//     updateUser,
//     deleteUser
// }

//-----------------------------------Day-06-------------------------------------
const User=require('../models/userModel');

const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
};

const createUser=async(req,res)=>{
    try{
        const {name,email}=req.body;

        //create new user
        const newUser=new User(name,email);

        //save to database
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }catch(error){
        res.status(400).json({message:'Error creating user'});
    }
};

module.exports={
    getAllUsers,
    createUser
}