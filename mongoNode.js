const http = require('http');
const {MongoClient , ObjectId} = require('mongodb');
const urlModule = require('url')

const mongoUrl = `mongodb+srv://soumyaditya2021:utzzLtftRFkAA7nz@workshopcluster.ao6bkwg.mongodb.net/?retryWrites=true&w=majority&appName=WorkshopCluster`
const client = new MongoClient(mongoUrl);
const dbName = 'Polaris_School'


async function handleRequest(req , res) {
    await client.connect();
    const db = client.db(dbName)
    const collection = db.collection('Polaris_students');

    const parsedUrl = urlModule.parse(req.url , true);
    const {pathname , query} = parsedUrl;

    res.setHeader('Content-Type' , 'application/json')

    if(pathname == '/create' && req.method === 'GET'){
        const result = await collection.insertOne({
            name : query.name || 'Default Name',
            email : query.email || 'default@gmail.com'
        })
        res.end(JSON.stringify(result))
    }
    else if(pathname === '/read' && req.method === 'GET'){
        const users = await collection.find().toArray();
        res.end(JSON.stringify(users));
    }
    else if(pathname === '/update' && req.method === 'GET'){
        if(!query.id || (!query.name && !query.email)){
            res.end(JSON.stringify({error : 'Please provide id and data to update'}));
            return;
        }
        const updateData = {};
        if(query.name) updateData.name = query.name;
        if(query.email) updateData.email = query.email;

        const result = await collection.updateOne(
            {_id : new ObjectId(query.id)},
            {$set : updateData}
        );

        res.end(JSON.stringify(result));
    }
}


const server = http.createServer((req , res) => {
    handleRequest(req , res).catch(err => {
        res.writeHead(500 , {'Content-Type' : 'text/plain'});
        res.end('Internal Server Error : ' ,err.message);
    })
})

server.listen(3000 , () => {
    console.log('Server running at http://localhost:3000')
})