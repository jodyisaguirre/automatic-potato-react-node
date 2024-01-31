const express = require('express')
const app = express()
const cors = require('cors')

const users = [
    {
      name: "John",
      age: 30,
      ID: 1
    },
    {
      name: "Alice",
      age: 25,
      ID: 2
    },
    {
      name: "Bob",
      age: 35,
      ID: 3
    }
  ];

app.use(cors())
app.use(express.json())
  

app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.post("/users",(req,res) => {
    const userToBeAdded = req.body
    users.push(userToBeAdded)
    res.status(201).send (users)
})
app.listen(5001, () => { console.log("Server Started on Port 5000")})