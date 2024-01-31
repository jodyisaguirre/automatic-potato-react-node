const express = require('express')
const app = express()
const cors = require('cors')

const users = [
    {
      name: "John",
      age: 30,
      id: 1
    },
    {
      name: "Alice",
      age: 25,
      id: 2
    },
    {
      name: "Bob",
      age: 35,
      id: 3
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

app.delete("/users/:id", (req,res) =>{
    const id = req.params.id
    const userIdToBeRemoved = users.find(user => user.id === id)
    const index = users.indexOf(userIdToBeRemoved)
    
    users.splice(index,1)
    res.status(201).send(users)

})
app.listen(5001, () => { console.log("Server Started on Port 5000")})