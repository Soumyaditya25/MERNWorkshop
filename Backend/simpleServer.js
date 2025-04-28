const http= require('http');

const server=http.createServer((req,res)=>{
    if(req.method === 'GET'){
        res.write('You sent a GET request');
    }else if(req.method === 'POST'){
        res.write('You send a POST request');
    }else if(req.method === 'PUT'){
        res.write('You send a PUT request');
    }
    res.end();
});

server.listen(3000,()=>console.log('server running on port 3000'));