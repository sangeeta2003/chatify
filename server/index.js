const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User')
const jwt = require('jsonwebtoken')
dotenv.config();

mongoose.connect(process.env.MONGO_URL);
const jwtsecret = process.env.JWT_SECRET;

const app = express();

app.get('/',(req,res)=>{
    res.json('test ok');
})

app.post('/register',async(req,res)=>{
const{userName,password} = req.body;
const createdUser = await User.create({userName,password});
await jwt.sign({userId:createdUser,id},jwtsecret).then((err,token) =>{
if(err) throw err;
res.cookie('token',token).status(201).json('ok');
})
})

app.listen(4000);
