const express=require('express')
const app=express()
const db=require('./database/index')

app.get('/',(req,res)=>{
    res.send('hello world')
})

const port = 3000
app.listen(port,()=>{
    console.log('server run')
})