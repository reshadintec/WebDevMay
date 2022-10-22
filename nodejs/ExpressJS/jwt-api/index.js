const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
//using .env variables
require('dotenv').config()

//connecting to DB
mongoose.connect('mongodb://localhost:27017/bcrypt',(err)=>{
    console.log("connected to DB")
})

//create post schema

const userSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password:String
})

//creating user 
const User = mongoose.model('Users',userSchema)



//use middlewares 
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Welcome to protected restful api')
})

app.post('/',(req,res)=>{
User.find({username:req.body.username})
 .then(user=>{
    if(user.length!==0){
        if(user[0].password === req.body.password){
            jwt.sign({username:req.body.username},process.env.Key,(err,token)=>{
                res.json({
                    msg:'user logged in',
                    token:token
                })
            })
        }else{
            res.json({
                msg:'user or password incorrect'
            })
        }
    }else{
        res.json({
            msg:'user or password incorrect'
        })
    }
 })
})

//user registeration
app.post('/user',(req,res)=>{
    const {username,password} =req.body
    const user = new User({username,password}) 
    user.save()
    .then(data=>{
        res.json({
            message:'User Created',
            data:data
        })
    })
})

app.post('/login',(req,res)=>{
    const {username} = req.body
    jwt.sign({username},process.env.Key, {
        algorithm: 'HS256',
        expiresIn: '60s'
    },(err,token)=>{
        res.json({
            payload:req.body,
            token:token
        })
    })
    // res.json({username})
})
//istokenvalid middleware function
// const isTokenValid = (req,res,next)=>{
//     console.log(req.headers['authorization'])
//     const token = req.headers['authorization']
//     jwt.verify(token,'secretkey',(err,decoded)=>{
//         if(!err){
//             req.user = decoded
//             next()
//         }else{
//             res.status(403).send('Forbidden Request')
//         }
//     })
// }


//tokken from url query

const isTokenExist=(req,res,next)=>{
    console.log(req.query)
    const token = req.query.apiKey
    jwt.verify(token,process.env.Key,(err,decoded)=>{
        if(decoded!==undefined){
            req.user = decoded
            next()
        }else{
            res.status(403).send('Forbidden Request')
        }
    })
}

//retrieve token as bearer
// const isTokenValid = (req,res,next) =>{
//     console.log(req.headers['authorization'].split(' ')[1])
//     const token = req.headers['authorization'].split(' ')[1]
//     jwt.verify(token,'secretkey',(err,decoded)=>{
//         if(decoded !== undefined){
//             req.user = decoded
//             next()
//         }else{
//             res.status(403).send('Forbidden Request')
//         }
//     })
// }

app.get('/profile', isTokenExist,(req,res)=>{
    res.json({
        id:1,
        username: 'admin',
        followers: 100
    })
})

//setting listen port 
// app.listen(3000,()=>console.log('server is runnin at htt://localhost:3000'))
app.listen(process.env.PORT, ()=>console.log('App is running on port 3000'))