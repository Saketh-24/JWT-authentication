const express = require('express');
const app = express();

const DbConnection = require('./database');

app.use(express.json())
DbConnection();


app.get('/signup',(req,res)=>
{
    
})

app.listen(process.env.PORT,()=> console.log(`Server running at ${process.env.PORT}`))