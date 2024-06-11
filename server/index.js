const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User')
dotenv.config();

mongoose.connect(process.env.MONGO_URL);


const app = express();

app.get('/',(req,res)=>{
    res.json('test ok');
})

app.post('/register',async(req,res)=>{
const{userName,password} = req.body;
await User.create({userName,password});
res.json();
})

app.listen(4000);
