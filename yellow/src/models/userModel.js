const mongoose=require('mongoose');

//Define the schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true
    }
});

//Create the model
const User=mongoose.model('User',userSchema);

module.exports=User;