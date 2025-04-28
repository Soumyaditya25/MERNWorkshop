const http= require('http');

const server = http.createServer((req, res) => { 
    if (req.method === 'GET' && req.url === '/hello'){
    res.writeHead (200, { 'Content-Type': 'application/json'}); 
    res.end(JSON.stringify({message: 'Hello from GET API'}));
    }
else if (req.method == 'POST' && req.url === '/data') {

let body='';

req.on('data', chunk => body + chunk);

req.on('end', () => {
const parsed = JSON.parse(body);
 res.writeHead(200, {'Content-Type': 'application/json' }); 
 res.end(JSON.stringify({received: parsed })); 
});
}

else{
    res.writeHead(404);
    res.end('Not Found');
}
});

server.listen(5000,()=>console.log('server running on port 5000'));
