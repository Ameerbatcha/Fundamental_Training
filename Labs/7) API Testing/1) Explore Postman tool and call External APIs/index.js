const express = require('express')
const fs = require('fs')
const bodyparser = require('body-parser')
const port = 3000;
let objsent

const app = express()
app.use(bodyparser.json());



app.get('/login',(req,res)=>{
    res.sendFile("loggedin.html", { root: __dirname })
})

app.post('/logindiff', (req, res) => {
    objsent = JSON.stringify(req.body)
    console.log(objsent)
    res.send('Registered')
})

app.listen(port, () => {
    console.log(`server listenng at port ${port}`)
})