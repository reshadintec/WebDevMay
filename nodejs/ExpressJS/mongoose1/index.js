// import express and mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//db connection

mongoose.connect('mongodb://localhost:27017/firstapp',(err)=>{
    console.log('Connected to database')
})

//create post schema 

const postSchema = mongoose.Schema({
    title:String,
    content:String,
    date:String
})

//compile to model 
const Post = mongoose.model('Posts',postSchema)

// import middleware 

app.use(express.json())

app.get('/',(req,res)=>{    
    res.send("Newspaper restFullApiv1.0")
})

app.get('/posts',(req,res)=>{
    //retreive all posts from mongodb and response them as json 
    Post.find({})
        .then(posts=>{
            console.log(posts)
            res.json({
                message: 'ok',
                data:posts
            })
        })
    })

app.post('/post',(req,res)=>{
    const {title,content} = req.body
    const post = new Post({title,content,date:new Date()})
    post.save()
    .then(answer=>{
        res.json({
            message:'saved',
            data:answer
        })
    })
})

app.put('/post/:id',(req,res)=>{
    const {id} = req.params
    Post.findByIdAndUpdate(id,req.body)
    .then(result=>{
        res.json({
            message:'updated',
            data:result
        })
    })
})


//delete a record

app.delete('/post/:id',(req,res)=>{
    const {id} = req.params
    Post.findByIdAndDelete(id)
    .then(result=>{
        res.json({
            message:'deleted',
            data:result
        })
    })
})


app.all('*',(req,res)=>{
    res.json({
        message:'not found'
    })
})
//set listen port

app.listen(8080,()=>{
    console.log("Running on port 8080")
})