const express=require('express');
const { UserModel } = require('../model/user.model');
require('dotenv').config();
const userRouter=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
userRouter.post('/register', async (req,res)=>{
    const {username, email, password}=req.body;
    const isUserExist=await UserModel.findOne({email});
    if(!isUserExist)
    {
        bcrypt.hash(password, 5, async (err, result)=>
        {
            if(err){
                res.send(err);
            }
            else
            {
                const user=await new UserModel({username,email, password:result});
                await user.save();
            }
        })
    }
    else
    {
        res.send("You are already registered!Please login");
    }
})

module.exports={userRouter};


userRouter.post('/login', async (req,res)=>{
    const { email, password}=req.body;
    const isUserExist=await UserModel.findOne({email});
    if(isUserExist)
    {
        bcrypt.compare(password, isUserExist.password, async (err, result)=>
        {
            if(err){
                res.send(err);
            }
            else
            {
                jwt.sign(req.body, process.env.Key,(err,token)=>{
                    if(token)
                    {
                        res.json({token:token});
                    }
                    else
                    {
                        res.send(err);
                    }
                })
            }
        })
    }
    else
    {
        res.send("You are not registered user, Please register");
    }
})

module.exports={userRouter};