const mongoose = require('mongoose');

module.exports = ()=>
    {
        mongoose.connect('mongodb://localhost:27017/JWT-Auth')
        .then(console.log("db connected successfully......."))
        .catch((error)=>{console.log(error)})
    }