let {validationResult} = require('express-validator')
let {v4: uuid} = require('uuid');

let users = [
    {
        id: uuid(),
        name: "user1",
        email: "email1@example.com",
        password: "12345qwerty",
        phone: "9991199777",
    },
    {
        id: uuid(),
        name: "user2",
        email: "email2@example.com",
        password: "12346qwerty",
        phone: "9991199776",
    }
]

let siginUser = (req,res) => {
    let errors = validationResult(req);
    let body = req.body;
    if(errors && errors.length) {
        res.status(400).json({success:false,message:errors[0].message})
    }
    let user = users.find((u)=>{
        return u.email == body.email
    })
    if(!user){
        return res.status(404).json({success:false,message:"User not found"})
    }
    if(user.password != body.password) {
        return res.status(404).json({success:false,message:"Password incorrect"})
    }
    res.status(200).json({success:true,message:"User signed in successfully",data:{user}})
}

let signUpUser = ()=> {
    let errors = validationResult(req);
    let body = req.body;
    if(errors && errors.length) {
        res.status(400).json({success:false,message:errors[0].message})
    }
    let existingUser = users.find((u)=>{
        return u.email == body.email
    })
    if(existingUser){
        return res.status(404).json({success:false,message:"User already signedup"})
    }
    let newUser = {
        id: uuid.generate(),
        name: body.name,
        email: body.email,
        password: body.password,
        phone: body.phone
    }
    users.push(newUser);
    return res.status(200).json({success:true,message:"User signedup successfully"})
}

let updateUser = ()=> {
    let userId = req.params.id;
    let userIndex = -1;
    let user = users.find((u,idx)=>{
        userIndex = idx;
        return u.id == userId;
    })
    if(!userId) {
       return res.status(404).json({success:false,"message":"user not found"})
    }
    let newPhone = req.body.phone;
    let newName = req.body.name;
    let updatedUser = {...user}
    if(newName && newName != "")
    {
        updatedUser.name = newDesc
    }
    if(newPhone && newPhone != "")
    {
        updatedUser.phone = newPrice
    }
    users[userIndex] = updatedUser
    res.status(200).json({success:true,message:"User Details Updated successfully"})
}

let deleteUser = ()=>{
    let userId = req.params.id;
    users = users.filter(u=>{
        return u.id != userId
    })
    res.status(200).json({success:true,message:"User Deletd successfully"})
}

module.exports = {
    siginUser,
    signUpUser,
    updateUser,
    deleteUser
}