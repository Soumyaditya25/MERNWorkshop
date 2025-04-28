const http=require('http');

const server=http.createServer((req,res)=>{
    res.end("hello from Node.js server!");
}
);

server.listen(5000,()=>{
    console.log("server running at http:localhost:5000");
}

)