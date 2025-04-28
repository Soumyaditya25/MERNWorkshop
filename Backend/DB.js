const mongoose=require('mongoose');

const url=process.env.MONGO_URL || "127.0.0.1:"

const connection= mongoose.connect(url);
connection
.then(()=>console.log("My atlas is connected"))
.catch((err)=>console.log("Database is not connected",err));
