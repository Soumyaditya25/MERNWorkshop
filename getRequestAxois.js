const axios=require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/20')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));