const axios=require('axios')

axios.get('http://localhost:5000/hello')
    .then(res=>console.log(res.data))
    .catch(err=>console.error(err));