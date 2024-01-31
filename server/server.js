const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(5001, () => { console.log("Server Started on Port 5000")})