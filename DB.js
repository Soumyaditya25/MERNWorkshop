const mongoose=require('mongoose');

const url=`mongodb+srv://soumyaditya2021:utzzLtftRFkAA7nz@workshopcluster.ao6bkwg.mongodb.net/?retryWrites=true&w=majority&appName=WorkshopCluster`;

const connection= mongoose.connect(url);
connection
.then(()=>console.log("My atlas is connected"))
.catch((err)=>console.log("Database is not connected",err));
