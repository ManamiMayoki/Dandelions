//The Application Bootstrapper

require('dotenv').config();
const express=require('express');
const userRoutes=require('./routes/userRoutes');
const app=express();
const PORT=process.env.PORT || 3000;

const logger=require('./middleware/logger');
const mockAuth=require('./middleware/auth');

//MIDDLEWARE: Allows the server to parse JSON bodies sent by the client
app.use(express.json());

//ROUTING: Directs all incoming traffic starting with "/users" to the router
app.use('/users',userRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})


const app=express();
app.use(logger);