'use strict';

const express = require('express');

const app =express();


app.get('/',(req,res) =>{
    res.send('home route')
})


app.get('/data' ,(req, res)=>{
    res.status(200).json({
        name :"Obieda",
        email :'obieda.jehad'
    })
})


function start(PORT) {
    app.listen(PORT,()=>{
        console.log(`Running on port ${PORT}`);
    })
}


module.exports ={
    start :start,
    app :app
}