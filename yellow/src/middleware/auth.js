//This will act as a Router Middleware or Route-Specific Middleware. It guards secret routes. It acts like a bouncer: it checks 
// if the request brought a specific password header. If not, it blocks it right there.

const mockAuth=(req,res,next)=>{
    const apiKey=req.headers['x-api-key'];

    if(apiKey==='dandelions123'){
        next();
    }else{
        res.status(401).json({error:'Unauthorized Access'});
    }
};

module.exports=mockAuth;