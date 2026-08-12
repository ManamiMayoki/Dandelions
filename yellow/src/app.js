// //The Application Bootstrapper

// require('dotenv').config();
// const express=require('express');
// const userRoutes=require('./routes/userRoutes');
// const logger=require('./middleware/logger');
// const mockAuth=require('./middleware/auth');


// const app=express();
// const PORT=process.env.PORT || 3000;



// //MIDDLEWARE: Parse incoming JSON requests & log traffic
// app.use(express.json());
// app.use(logger);//Application Middleware: run globally for all routes

// //PUBLIC ROUTES: no auth required
// app.get('/public',(req,res)=>{
//     res.json({message:'Welcome to public page!'});
// });

// //PROTECTED ROUTE: auth required protected by mockauth middleware
// app.get('/secret',mockAuth,(req,res)=>{
//     res.json({message:'Welcome to secret page!'});
// });

// //ROUTING: user CRUD endpoints
// app.use('/users',userRoutes);

// app.listen(PORT,()=>{
//     console.log('Server is running on port',PORT);
// })


//-----------------------------------Day-06-------------------------------------
require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const logger=require('./middleware/logger');
const userRoutes=require('./routes/userRoutes');

const app=express();
const PORT=process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use.logger();

//Routes
app.use('/',userRoutes);

//connect to MongoDB
