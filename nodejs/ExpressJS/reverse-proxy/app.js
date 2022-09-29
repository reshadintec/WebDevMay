//8faefebf2dca4444857af1f580b8e1ba

const express = require('express');
const cors = require('cors');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express()

//use middleware
app.use(cors());
app.use(express.json());

//proxy server
app.use('/news',createProxyMiddleware({
    target:'https://newsapi.org/v2/top-headlines?country=us&apiKey=8faefebf2dca4444857af1f580b8e1ba',
    pathRewrite:{['/news'] : ''},
    changeOrigin:true,
    secure:true 
}));


app.listen(4000,()=>console.log('My server is running'));
