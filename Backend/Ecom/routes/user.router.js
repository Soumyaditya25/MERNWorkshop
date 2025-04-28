const express = require("express");
const { check } = require('express-validator')
const { siginUser, signUpUser, updateUser, deleteUser } = require('../controllers/user.controller')

let userRouter = express.Router();

userRouter.post("/signin",[
    check('email').not().normalizeEmail(),check('password').not()
],siginUser)

userRouter.post("/signup", [
    check('email').not().normalizeEmail(),
    check('password').not().isStrongPassword()
],signUpUser)

userRouter.patch("/:id",updateUser)

userRouter.delete("/:id",deleteUser)

module.exports = userRouter;