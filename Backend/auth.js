const bcrypt= require('bcrypt');

async function hashPassWord(){
    try{
        const password='mypassword';
        const userInput='mypassword'
        const saltRounds= 10;

        const hashed= await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password: ', hashed);

        const isMatch=await bcrypt.compare(userInput, hashPassWord);
        console.log('Password match: ', isMatch);
    }catch(err){
        console.error('Error hashing password', err);
    }
}

hashPassWord();