const jwt= require('jsonwebtoken');

function generateToken(){
    const payload= {userId: 123 , username: "Soumyaditya"};
    const secretKey= 'secretKey';
    const options={expiresIn: '1h'};

    try{
        const token= jwt.sign(payload, secretKey, options);
        console.log('Generated JWT:', token);
    }catch(err){
        console.error('Error generating token: ', err);
    }
}

generateToken();