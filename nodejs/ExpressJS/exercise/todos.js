//importing express and mongoose
const express = require('express');
const mongoose = require('mongoose');

//creating the app
const todo = express();

const TodoModel = require ("./model")
//connecting to monogo
mongoose.connect('monogdb://localhost:27017/todos',(err)=>{
    console.log('DB Connection successfull')
})

//creating a post schema
const postSchema = mongoose.Schema({
    userId:Number,
    id:Number,
    title:String,
    completed:Boolean
})

//





//Listening Port

todo.listen(8080,()=>{
    console.log('You are connected on port 8080')
})