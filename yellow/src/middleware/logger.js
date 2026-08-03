//This is an Application Middleware. It intercepts every single request coming to the server, prints the method (like GET or POST) 
// and the URL path to your terminal, and then lets the request keep moving.

const logger=(req,res,next)=>{//Because it's a middleware, Express passes it three arguments
    console.log(`Request received: ${req.method} ${req.url}`);//req.method extracts the HTTP verb(GET, POST)& req.url extracts the path requested(/users).
    next();//Without this line, your server will freeze, and the client's loading wheel will spin forever.
};

module.exports=logger;//This exports function so we can load and use it in our app.js file.