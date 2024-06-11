const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.json('test ok');
})

app.post('/register',(req,res)=>{
    
})

app.listen(4000);
