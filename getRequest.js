const https= require('https');

https.get('https://jsonplaceholder.typicode.com/posts/25',(res)=>{
    let data='';
    res.on('data',chunk=> data+= chunk);
    res.on('end',()=>console.log(JSON.parse(data)));
}
).on('error', err => console.error(err));

https.get('https://jsonplaceholder.typicode.com/posts/20',(res)=>{
    let data='';
    res.on('data',chunk=> data+= chunk);
    res.on('end',()=>console.log(JSON.parse(data)));
}
).on('error', err => console.error(err));