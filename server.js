//Topic

/* 1. Node.js-->Not a language or framework. it is a runtime environment thats mainly let us run js on both 
      computer & server instead of just run inside web browser

      Event-driven--> react to event like request
      Non-blocking I/O-->does not wait for one task to finish before another task

    2. V8 Engine-->built by google for chrome. mainly convert js to machine code

    3. Node Architecture:
       Call Stack-->A stack that tracks what function is currently running. js executes one thing at a time here.
       Callback Queue-->A waiting room line. When an asynchronous task (like a file read) finishes,its callback function waits in this queue.
       Event Loop-->The manager. It constantly looks at the Call Stack. If the Call Stack is empty,it moves the next waiting function from 
       the Callback Queue into the Call Stack to run.

    4. Modules-->Modules are just separate code files we can share.
       CommonJS: The traditional Node system using "require()" to import files.
       ES Modules: The modern JavaScript standard using "import" statements.


*/

//bilt-in

const http=require('http');
const fs=require('fs');

fs.writeFile('lala.txt','Hlw,pingpong.I am from universe',(err)=>{
    if(err)throw err;
    console.log('from universe.');

    fs.readFile('lala.txt','utf8',(err,data)=>{
        if(err)throw err;
        console.log('universe is reading.',data);
    });
});

//server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url==='/'){
        res.end('welcome dandelions\n');
    }else if(req.url==='/about'){
        res.end("server built by raw node.js modules");
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('404 page not found\n');
    }
});


//local port
const PORT=3000;

//start server
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}/`);
});

