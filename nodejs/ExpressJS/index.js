//import express module 
const { response } = require("express");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");

//use bodyParser middleware
    server.use(bodyParser({
        extended:true
    }))
// homepage http get request endpoint
// server.get('/',(req,res)=>{
//     console.log(req.params)
//     console.log(req.body)
    //display a message or html
    //res.send('Hello World');

    // server.get('/:id',(req,res)=>{
    //     console.log(req.params)
    //     res.json({id:1,paramResult})
    // })

    //dispaly json 
    // res.json({
    //     id:1,
    //     username: "admin",
    //     password: "supersecret",
    //     address: "123 Kirk street",
    //     hobbies:["Playin Football","Watching Netflix"]
    // })


    //post httml request

    server.post('/',(req,res)=>{
        console.log(req.body)
        res.json({
            username: req.body.username,
            password: req.body.password
        })
    })

// });





server.listen(8080,()=>{
    console.log("Server is running on port:8080");
})